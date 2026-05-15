# Weather Dashboard

Aplicación web del clima construida con React que consume la API de OpenWeatherMap para mostrar el clima actual y el pronóstico de los próximos 5 días de cualquier ciudad del mundo.

---

## ¿Qué es?

Weather Dashboard es una aplicación web que permite consultar el clima en tiempo real. El usuario puede buscar una ciudad por nombre o permitir que la app detecte su ubicación automáticamente. La interfaz incluye modo oscuro y manejo de errores para ciudades no encontradas.

---

## ¿Cómo funciona el flujo de datos?

```
Usuario escribe una ciudad o permite geolocalización
        ↓
React captura el input y hace una petición a OpenWeatherMap
        ↓
OpenWeatherMap devuelve los datos del clima en formato JSON
        ↓
React procesa y organiza los datos
        ↓
La interfaz se actualiza mostrando temperatura, clima y pronóstico
```

---

## Estructura del proyecto

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx        # Barra de búsqueda y geolocalización
│   │   ├── WeatherCard.jsx      # Clima actual
│   │   ├── ForecastCard.jsx     # Pronóstico de 5 días
│   │   └── ErrorMessage.jsx     # Manejo de errores
│   ├── hooks/
│   │   └── useWeather.js        # Lógica de peticiones a la API
│   ├── services/
│   │   └── weatherService.js    # Configuración de Axios y endpoints
│   ├── App.jsx                  # Componente principal
│   └── main.jsx                 # Punto de entrada
├── .env                         # API key (no se sube a GitHub)
├── .gitignore
├── index.html
└── package.json
```

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| React | Interfaz de usuario y manejo de estado |
| Tailwind CSS | Estilos y modo oscuro |
| OpenWeatherMap API | Datos del clima en tiempo real |
| Vite | Herramienta de desarrollo y compilación |
| Axios | Peticiones HTTP a la API |

---

## Instalación

**Requisitos:** Node.js v18 o superior y una API key de OpenWeatherMap

```bash
# Clona el repositorio
git clone https://github.com/TU-USUARIO/weather-dashboard.git

# Entra a la carpeta
cd weather-dashboard

# Instala las dependencias
npm install

# Crea el archivo .env en la raíz del proyecto
touch .env
```

Agrega tu API key en el archivo `.env`:

```
VITE_API_KEY=tu_api_key_aqui
VITE_BASE_URL=https://api.openweathermap.org/data/2.5
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Uso

### Buscar por ciudad
Escribe el nombre de una ciudad en la barra de búsqueda y presiona **Buscar**.

### Usar geolocalización
Presiona el botón 📍 y acepta el permiso de ubicación en el navegador.

### Modo oscuro
Presiona el botón 🌙 **Oscuro** en la esquina superior derecha para alternar entre modo claro y oscuro.

---

## Funcionalidades

- Clima actual: temperatura, sensación térmica, humedad, viento y presión
- Pronóstico de 5 días con ícono y descripción
- Búsqueda por nombre de ciudad
- Geolocalización automática
- Modo oscuro / modo claro
- Manejo de errores para ciudades no encontradas

---

## Autor

Ruben Dario — [rubendario.dev](https://rubendario.dev)
