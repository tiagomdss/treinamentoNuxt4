# 🚀 Guia de Migração: PHP → Nuxt 4

## 📚 Índice
1. [Por que Nuxt?](#por-que-nuxt)
2. [Comparação PHP vs Nuxt](#comparação)
3. [Estrutura de Pastas](#estrutura)
4. [Exemplos Práticos](#exemplos)

## 💡 Por que Nuxt?

| PHP Tradicional | Nuxt 4 |
|----------------|---------|
| 🐌 Reload completo | ⚡ SPA instantâneo |
| 🔄 HTML + PHP misturado | 🎯 Separação clara |
| 📝 Código repetitivo | ♻️ Componentes reutilizáveis |

## 📁 Estrutura de Pastas

### eventosNTL (Projeto Real)
```
eventosNTL/
├── app/                    # Frontend Nuxt
│   ├── pages/             # Rotas automáticas
│   ├── components/        # Componentes reutilizáveis
│   ├── composables/       # Lógica compartilhada
│   └── layouts/           # Layouts
└── api/                   # Backend PHP
    └── js/                # Código original
```

## 🔄 Comparação Prática

### Listagem de Dados

**PHP Tradicional:**
```php
<?php
$sql = "SELECT * FROM eventos";
$result = mysqli_query($conn, $sql);
?>
<table>
  <?php while($row = mysqli_fetch_assoc($result)): ?>
    <tr><td><?= $row['nome'] ?></td></tr>
  <?php endwhile; ?>
</table>
```

**Nuxt 4:**
```vue
<template>
  <table>
    <tr v-for="evento in eventos" :key="evento.id">
      <td>{{ evento.nome }}</td>
    </tr>
  </table>
</template>

<script setup>
const { data: eventos } = await useFetch('/api/eventos')
</script>
```

**Vantagens:**
- ✅ Sem reload de página
- ✅ Reatividade automática
- ✅ Código mais limpo
