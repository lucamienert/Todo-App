#!/bin/bash

echo "▶️ Warten auf die Datenbank..."
sleep 5  # optional, oder verwende später wait-for-it.sh

echo "🚀 Führe Migration aus..."
dotnet ef database update

echo "✅ Starte WebAPI..."
exec dotnet backend.dll
