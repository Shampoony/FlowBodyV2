<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Вариант 1: Добавить в main.js или App.vue (mounted)
const loadTelegramScript = () => {
  return new Promise((resolve, reject) => {
    // Проверяем, не загружен ли уже скрипт
    if (window.Telegram?.WebApp) {
      resolve(window.Telegram.WebApp)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-web-app.js'
    script.async = true

    script.onload = () => {
      console.log('✅ Telegram WebApp script загружен')
      resolve(window.Telegram?.WebApp)
    }

    script.onerror = () => {
      console.error('❌ Ошибка загрузки Telegram WebApp script')
      reject(new Error('Failed to load Telegram WebApp script'))
    }

    document.head.appendChild(script)
  })
}

// Вариант 2: Обновите ваш onMounted в компоненте календаря:
onMounted(async () => {
  console.log('=== TELEGRAM WEBAPP DEBUG INFO ===')

  try {
    // Загружаем скрипт если его нет
    await loadTelegramScript()

    // Небольшая задержка для инициализации
    await new Promise((resolve) => setTimeout(resolve, 100))

    if (window.Telegram?.WebApp) {
      console.log('🚀 Telegram WebApp доступен!')
      console.log('WebApp объект:', window.Telegram.WebApp)

      // Инициализируем WebApp
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()

      // Основные свойства
      console.log('Версия:', window.Telegram.WebApp.version)
      console.log('Платформа:', window.Telegram.WebApp.platform)
      console.log('Цветовая схема:', window.Telegram.WebApp.colorScheme)
      console.log('Развернут:', window.Telegram.WebApp.isExpanded)

      // Информация о пользователе
      console.log('Пользователь:', window.Telegram.WebApp.initDataUnsafe?.user)
      console.log('Чат:', window.Telegram.WebApp.initDataUnsafe?.chat)
      console.log('Start param:', window.Telegram.WebApp.initDataUnsafe?.start_param)

      // Данные инициализации
      console.log('Init Data:', window.Telegram.WebApp.initData)
      console.log('Init Data Unsafe:', window.Telegram.WebApp.initDataUnsafe)

      // Тема
      console.log('Цвета темы:', window.Telegram.WebApp.themeParams)

      // Viewport
      console.log('Высота viewport:', window.Telegram.WebApp.viewportHeight)
      console.log('Стабильная высота:', window.Telegram.WebApp.viewportStableHeight)

      // Парсим данные из URL (fallback)
      const urlParams = new URLSearchParams(window.location.hash.substring(1))
      console.log('URL параметры:')
      console.log('- Version:', urlParams.get('tgWebAppVersion'))
      console.log('- Platform:', urlParams.get('tgWebAppPlatform'))

      const themeParams = urlParams.get('tgWebAppThemeParams')
      if (themeParams) {
        try {
          const parsedTheme = JSON.parse(decodeURIComponent(themeParams))
          console.log('- Theme из URL:', parsedTheme)
        } catch (e) {
          console.log('- Theme (raw):', themeParams)
        }
      }
    } else {
      console.log('❌ Telegram WebApp по-прежнему недоступен после загрузки скрипта')
    }
  } catch (error) {
    console.error('Ошибка при загрузке Telegram WebApp:', error)

    // Fallback: парсим данные из URL
    console.log('📋 Используем fallback - парсинг URL параметров:')
    const urlParams = new URLSearchParams(window.location.hash.substring(1))

    if (urlParams.get('tgWebAppVersion')) {
      console.log('✅ Обнаружены Telegram WebApp параметры в URL')
      console.log('Version:', urlParams.get('tgWebAppVersion'))
      console.log('Platform:', urlParams.get('tgWebAppPlatform'))

      const themeParams = urlParams.get('tgWebAppThemeParams')
      if (themeParams) {
        try {
          const parsedTheme = JSON.parse(decodeURIComponent(themeParams))
          console.log('Theme:', parsedTheme)
        } catch (e) {
          console.log('Theme (raw):', themeParams)
        }
      }
    }
  }

  console.log('User Agent:', navigator.userAgent)
  console.log('URL:', window.location.href)
  console.log('=== END DEBUG INFO ===')
})
</script>

<style>
@import './output.css';
@import './assets/scss/style.scss';
</style>
