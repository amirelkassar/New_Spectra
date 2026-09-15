FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY Spectra.Application/Spectra.Application.csproj Spectra.Application/
COPY Spectra.Domain/Spectra.Domain.csproj Spectra.Domain/
COPY Spectra.Domain.Shared/Spectra.Domain.Shared.csproj Spectra.Domain.Shared/
COPY Spectra.Infrastructure/Spectra.Infrastructure.csproj Spectra.Infrastructure/
COPY Spectra.WebAPI/Spectra.WebAPI.csproj Spectra.WebAPI/
COPY Spectra.Web/Spectra.Web.csproj Spectra.Web/
RUN dotnet restore Spectra.Web/Spectra.Web.csproj

COPY . .
RUN dotnet publish Spectra.Web/Spectra.Web.csproj --configuration Release --no-restore --output /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_HTTP_PORTS=8080

COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Spectra.Web.dll"]