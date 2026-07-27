# ==========================================
# DANGER DESIGN - SYSTEM DIAGNOSTIC & LOGGER
# ==========================================

$LogFile = "debug-log.txt"
"==================================================" | Out-File -FilePath $LogFile -Encoding utf8
"DANGER DESIGN PORTFOLIO - SYSTEM DIAGNOSTIC REPORT" | Out-File -FilePath $LogFile -Append -Encoding utf8
"Generated at: $(Get-Date)"                        | Out-File -FilePath $LogFile -Append -Encoding utf8
"==================================================" | Out-File -FilePath $LogFile -Append -Encoding utf8
""                                                  | Out-File -FilePath $LogFile -Append -Encoding utf8

Write-Host " Running System Diagnostic... Log saving to $LogFile" -ForegroundColor Cyan

# 1. Environment & Tools Check
"--- 1. ENVIRONMENT & NODE SETUP ---"              | Out-File -FilePath $LogFile -Append -Encoding utf8
try {
    $nodeVer = node -v 2>&1
    "Node Version: $nodeVer"                        | Out-File -FilePath $LogFile -Append -Encoding utf8
    $npmVer = npm -v 2>&1
    "NPM Version:  $npmVer"                        | Out-File -FilePath $LogFile -Append -Encoding utf8
} catch {
    "ERR: Node.js or NPM not found in PATH"        | Out-File -FilePath $LogFile -Append -Encoding utf8
}
""                                                  | Out-File -FilePath $LogFile -Append -Encoding utf8

# 2. Key Architecture Files Check
"--- 2. REQUIRED ARCHITECTURE FILES ---"           | Out-File -FilePath $LogFile -Append -Encoding utf8
$requiredFiles = @(
    "package.json",
    "mdx-components.tsx",
    "src/app/layout.tsx",
    "src/app/page.tsx",
    "src/components/WorkSection.tsx",
    "src/components/sections/DevRange.tsx"
)

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        "[OK]   Found: $file"                        | Out-File -FilePath $LogFile -Append -Encoding utf8
    } else {
        "[MISS] MISSING: $file"                     | Out-File -FilePath $LogFile -Append -Encoding utf8
        Write-Host "  Missing required file: $file" -ForegroundColor Yellow
    }
}
""                                                  | Out-File -FilePath $LogFile -Append -Encoding utf8

# 3. Git Repo & Heavy Files Inspection
"--- 3. GIT REPOSITORY WEIGHT ---"                  | Out-File -FilePath $LogFile -Append -Encoding utf8
try {
    $gitObj = git count-objects -vH 2>&1
    $gitObj | Out-File -FilePath $LogFile -Append -Encoding utf8
} catch {
    "ERR: Unable to run git count-objects"          | Out-File -FilePath $LogFile -Append -Encoding utf8
}
""                                                  | Out-File -FilePath $LogFile -Append -Encoding utf8

# 4. Check for Unfiltered Heavy Files in public/
"--- 4. PUBLIC ASSETS SIZE CHECK ---"              | Out-File -FilePath $LogFile -Append -Encoding utf8
if (Test-Path "public") {
    $largeAssets = Get-ChildItem -Path "public" -Recurse -File | Where-Object { $_.Length -gt 10MB }
    if ($largeAssets) {
        foreach ($asset in $largeAssets) {
            $sizeMB = [math]::Round($asset.Length / 1MB, 2)
            "[WARN] Heavy Asset Found ($sizeMB MB): $($asset.FullName)" | Out-File -FilePath $LogFile -Append -Encoding utf8
            Write-Host "  Large asset (>10MB) detected: $($asset.Name) ($sizeMB MB)" -ForegroundColor Red
        }
    } else {
        "[OK] All public assets are under 10MB."     | Out-File -FilePath $LogFile -Append -Encoding utf8
    }
}
""                                                  | Out-File -FilePath $LogFile -Append -Encoding utf8

# 5. TypeScript & Next.js Dry Build Check
"--- 5. NEXT.JS BUILD & TYPESCRIPT AUDIT ---"       | Out-File -FilePath $LogFile -Append -Encoding utf8
Write-Host "  Running TypeScript type check..." -ForegroundColor Yellow
$tsCheck = npx tsc --noEmit 2>&1
if ($LASTEXITCODE -eq 0) {
    "[OK] TypeScript compilation passed with zero errors." | Out-File -FilePath $LogFile -Append -Encoding utf8
    Write-Host "  TypeScript check passed!" -ForegroundColor Green
} else {
    "[ERR] TypeScript Compilation Errors Detected:"         | Out-File -FilePath $LogFile -Append -Encoding utf8
    $tsCheck | Out-File -FilePath $LogFile -Append -Encoding utf8
    Write-Host "  TypeScript errors found! Check $LogFile for details." -ForegroundColor Red
}

""                                                  | Out-File -FilePath $LogFile -Append -Encoding utf8
"==================================================" | Out-File -FilePath $LogFile -Append -Encoding utf8
"END OF REPORT"                                     | Out-File -FilePath $LogFile -Append -Encoding utf8

Write-Host " Diagnostic Complete! Report saved to $LogFile" -ForegroundColor Green

