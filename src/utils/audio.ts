// Zero-Dependency Web Audio API Sound FX Engine

let audioCtx: AudioContext | null = null;
let sfxEnabled = true;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function toggleSFX(): boolean {
  sfxEnabled = !sfxEnabled;
  return sfxEnabled;
}

export function isSFXEnabled(): boolean {
  return sfxEnabled;
}

/** High-frequency 1200Hz tactile click sound */
export function playClickSound() {
  if (!sfxEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch {
    // Graceful fallback on audio policy restriction
  }
}

/** Low-frequency 120Hz sub-bass hum for swipes / room changes */
export function playSwipeHum() {
  if (!sfxEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch {
    // Graceful fallback
  }
}

/** Dynamic Spatial Audio Low-Pass Filter Scrubbing based on scroll velocity */
export function playScrollFilterFrequency(velocity: number) {
  if (!sfxEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const absVel = Math.min(Math.abs(velocity), 2000);
    if (absVel < 300) return;

    // Map velocity to filter cutoff (300Hz to 2400Hz)
    const cutoff = 300 + (absVel / 2000) * 2100;

    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(80, ctx.currentTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(cutoff, ctx.currentTime);

    gain.gain.setValueAtTime(0.02, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0005, ctx.currentTime + 0.08);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // Graceful fallback
  }
}
