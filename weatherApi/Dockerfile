# ---------------------- Base Stage ----------------------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base
WORKDIR /app

# ---------------------- Dependencies Stage ----------------------
FROM base AS deps

COPY *.csproj ./
RUN dotnet restore

# ---------------------- Development Stage ----------------------
FROM deps AS development

COPY . .

RUN dotnet new tool-manifest && dotnet tool install dotnet-ef --version 8.0.0

EXPOSE 7068
ENV ASPNETCORE_ENVIRONMENT=Development
CMD ["dotnet", "watch", "run", "--no-launch-profile"]

# ---------------------- Builder Stage ----------------------
FROM deps AS builder

COPY . .

RUN dotnet publish -c Release -o /app/publish

# ---------------------- Production Stage ----------------------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS production

WORKDIR /app

COPY --from=builder /app/publish .

EXPOSE 7068

ENTRYPOINT ["dotnet", "weatherApi.dll"]