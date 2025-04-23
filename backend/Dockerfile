FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

ENV PATH="${PATH}:/root/.dotnet/tools"
RUN dotnet tool install --global dotnet-ef

WORKDIR /src
COPY backend/*.csproj ./backend/
RUN dotnet restore ./backend/backend.csproj
COPY backend/. ./backend/
WORKDIR /src/backend
RUN dotnet build backend.csproj -c Release -o /app/build

FROM build AS publish
RUN dotnet publish backend.csproj -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "backend.dll"]
