# Start Java Spring Boot Backend in a new window
Write-Host "Starting Java Spring Boot Backend..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd youthgenx-backend; .\gradlew.bat bootRun"

# Start React Frontend in a new window
Write-Host "Starting React Frontend..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd youthgenx-web; npm run dev"

Write-Host "Both servers are starting! A new browser window should open shortly, or you can go to http://localhost:5173"
