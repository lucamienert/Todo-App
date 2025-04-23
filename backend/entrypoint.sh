#!/bin/bash

echo "Waiting for Database..."

until dotnet ef database update; do
  >&2 echo "Database unavailable, retrying in 3 seconds"
  sleep 3
done

echo "Starting API..."
exec dotnet backend.dll
