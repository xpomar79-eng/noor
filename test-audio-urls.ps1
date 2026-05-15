$servers = 1..10
foreach ($i in $servers) {
    $url = "https://server$i.mp3quran.net/minsh/001.mp3"
    try {
        $r = Invoke-WebRequest -Uri $url -Method Head -UseBasicParsing -ErrorAction Stop
        Write-Host "$url OK $($r.StatusCode)"
    } catch {
        Write-Host "$url ERR $($_.Exception.Message)"
    }
}
