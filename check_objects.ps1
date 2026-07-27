$objects = git rev-list --all --objects
$results = @()
foreach ($line in $objects) {
    $hash = ($line -split ' ')[0]
    $info = git cat-file --batch-check='%(objecttype) %(objectsize) %(rest)' $hash
    if ($info -like 'blob*') {
        $parts = $info -split ' ', 3
        if ($parts.Length -ge 3) {
            $results += [PSCustomObject]@{
                SizeKB = [math]::Round([int]$parts[1] / 1KB, 1)
                Path = $parts[2]
            }
        }
    }
}
$results | Sort-Object SizeKB -Descending | Select-Object -First 20 | Format-Table -AutoSize
