# API-Dokumentation

## Authentifizierung

### Login

```http
POST /api/auth/login
```

**Request Body:**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "token": "string",
  "user": {
    "id": "string",
    "username": "string",
    "name": "string",
    "email": "string",
    "role": "string"
  }
}
```

### Logout

```http
POST /api/auth/logout
```

**Headers:**

```
Authorization: Bearer <token>
```

## Benutzer

### Benutzerprofil abrufen

```http
GET /api/users/profile
```

**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
{
  "id": "string",
  "username": "string",
  "name": "string",
  "email": "string",
  "role": "string",
  "avatar": "string",
  "location": "string",
  "bio": "string",
  "socialLinks": {
    "twitter": "string",
    "linkedin": "string",
    "github": "string"
  },
  "lastLogin": "string",
  "createdAt": "string"
}
```

### Benutzerprofil aktualisieren

```http
PUT /api/users/profile
```

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "name": "string",
  "email": "string",
  "location": "string",
  "bio": "string",
  "socialLinks": {
    "twitter": "string",
    "linkedin": "string",
    "github": "string"
  }
}
```

## Dashboard

### Statistiken abrufen

```http
GET /api/dashboard/stats
```

**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
{
  "totalUsers": "number",
  "activeUsers": "number",
  "totalPosts": "number",
  "averageSessionTime": "string"
}
```

### Aktivitäten abrufen

```http
GET /api/dashboard/activities
```

**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
[
  {
    "id": "string",
    "type": "string",
    "description": "string",
    "timestamp": "string",
    "user": {
      "id": "string",
      "name": "string"
    }
  }
]
```

## Einstellungen

### Sprache ändern

```http
PUT /api/settings/language
```

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "language": "string"
}
```

## Fehlercodes

| Code | Beschreibung             |
| ---- | ------------------------ |
| 400  | Ungültige Anfrage        |
| 401  | Nicht autorisiert        |
| 403  | Zugriff verweigert       |
| 404  | Ressource nicht gefunden |
| 500  | Serverfehler             |

## Rate Limiting

- Maximal 100 Anfragen pro Minute
- Maximal 1000 Anfragen pro Stunde
