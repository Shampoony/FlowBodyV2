<template>
  <div class="v-calendar">
    <div class="container v-calendar__container">
      <div class="v-calendar__info info">
        <h1 class="v-rate__title title">Расписание</h1>
        <p class="v-calendar__subtitle subtitle">Расписание ваших уроков</p>
      </div>

      <div class="v-calendar__content">
        <!-- Заголовки дней недели -->
        <div class="v-calendar__header">
          <div class="v-calendar__day-header" v-for="day in dayHeaders" :key="day">
            {{ day }}
          </div>
        </div>

        <!-- Календарная сетка -->
        <div class="v-calendar__grid">
          <div
            v-for="day in calendarDays"
            :key="day.date"
            class="v-calendar__day"
            :class="{
              'v-calendar__day--available': day.isAvailable,
              'v-calendar__day--other-month': day.isOtherMonth,
              'v-calendar__day--locked': day.isLocked,
            }"
            @click="selectDay(day)"
          >
            <span
              class="v-calendar__day-number"
              :class="{ locked: day.isLocked || day.isOtherMonth }"
              >{{ day.dayNumber }}</span
            >
            <div v-if="day.isLocked || day.isOtherMonth" class="v-calendar__lock">
              <img src="/src/assets/images/loock.svg" alt="" />
            </div>
          </div>
        </div>

        <!-- Индикаторы внизу -->
        <div class="v-calendar__indicators">
          <div class="v-calendar__indicator">
            <div class="v-calendar__indicator-dot"></div>
            <span class="v-calendar__indicator-text">Дни с тренировками</span>
          </div>
          <div class="v-calendar__level">
            <span class="v-calendar__level-text">Уровень: Средний</span>
          </div>
        </div>
      </div>

      <ul class="v-calendar__list">
        <li class="v-calendar__list-item">
          <div class="calendar-row active">
            <div class="calendar-row__image">
              <img src="/src/assets/images/gym-icons/legs.jpg" alt="" class="calendar-row__image" />
            </div>

            <div class="calendar-row__content">
              <h3 class="calendar-row__title">Тренировки сегодня</h3>
              <p class="calendar-row__subtitle">какой-то текст об этом</p>
            </div>
            <div class="calendar-row__icon">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM17.9859 8.70711C18.3765 8.31658 18.3765 7.68342 17.9859 7.29289L11.622 0.928932C11.2314 0.538408 10.5983 0.538408 10.2078 0.928932C9.81723 1.31946 9.81723 1.95262 10.2078 2.34315L15.8646 8L10.2078 13.6569C9.81723 14.0474 9.81723 14.6805 10.2078 15.0711C10.5983 15.4616 11.2314 15.4616 11.622 15.0711L17.9859 8.70711ZM1 8L1 9L17.2788 9V8V7L1 7L1 8Z"
                  fill="#848484"
                />
              </svg>
            </div>
          </div>
        </li>
        <li class="v-calendar__list-item">
          <div class="calendar-row">
            <div class="calendar-row__image">
              <img src="/src/assets/images/gym-icons/legs.jpg" alt="" class="calendar-row__image" />
            </div>

            <div class="calendar-row__content">
              <h3 class="calendar-row__title">День ног</h3>
              <p class="calendar-row__subtitle">какой-то текст об этом</p>
            </div>
            <div class="calendar-row__icon">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM17.9859 8.70711C18.3765 8.31658 18.3765 7.68342 17.9859 7.29289L11.622 0.928932C11.2314 0.538408 10.5983 0.538408 10.2078 0.928932C9.81723 1.31946 9.81723 1.95262 10.2078 2.34315L15.8646 8L10.2078 13.6569C9.81723 14.0474 9.81723 14.6805 10.2078 15.0711C10.5983 15.4616 11.2314 15.4616 11.622 15.0711L17.9859 8.70711ZM1 8L1 9L17.2788 9V8V7L1 7L1 8Z"
                  fill="#848484"
                />
              </svg>
            </div>
          </div>
        </li>
        <li class="v-calendar__list-item">
          <div class="calendar-row">
            <div class="calendar-row__image">
              <img
                src="/src/assets/images/gym-icons/hands.jpg"
                alt=""
                class="calendar-row__image"
              />
            </div>

            <div class="calendar-row__content">
              <h3 class="calendar-row__title">День рук</h3>
              <p class="calendar-row__subtitle">какой-то текст об этом</p>
            </div>
            <div class="calendar-row__icon">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM17.9859 8.70711C18.3765 8.31658 18.3765 7.68342 17.9859 7.29289L11.622 0.928932C11.2314 0.538408 10.5983 0.538408 10.2078 0.928932C9.81723 1.31946 9.81723 1.95262 10.2078 2.34315L15.8646 8L10.2078 13.6569C9.81723 14.0474 9.81723 14.6805 10.2078 15.0711C10.5983 15.4616 11.2314 15.4616 11.622 15.0711L17.9859 8.70711ZM1 8L1 9L17.2788 9V8V7L1 7L1 8Z"
                  fill="#848484"
                />
              </svg>
            </div>
          </div>
        </li>
        <li class="v-calendar__list-item">
          <div class="calendar-row">
            <div class="calendar-row__image">
              <img
                src="/src/assets/images/gym-icons/fullbody.jpg"
                alt=""
                class="calendar-row__image"
              />
            </div>

            <div class="calendar-row__content">
              <h3 class="calendar-row__title">На всё тело</h3>
              <p class="calendar-row__subtitle">какой-то текст об этом</p>
            </div>
            <div class="calendar-row__icon">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM17.9859 8.70711C18.3765 8.31658 18.3765 7.68342 17.9859 7.29289L11.622 0.928932C11.2314 0.538408 10.5983 0.538408 10.2078 0.928932C9.81723 1.31946 9.81723 1.95262 10.2078 2.34315L15.8646 8L10.2078 13.6569C9.81723 14.0474 9.81723 14.6805 10.2078 15.0711C10.5983 15.4616 11.2314 15.4616 11.622 15.0711L17.9859 8.70711ZM1 8L1 9L17.2788 9V8V7L1 7L1 8Z"
                  fill="#848484"
                />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const currentDate = ref(new Date())
const selectedDate = ref(null)
const dayHeaders = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const availableDays = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30] // Дни с тренировками

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  const today = new Date()

  // Первый день месяца
  const firstDay = new Date(year, month, 1)
  // Последний день месяца
  const lastDay = new Date(year, month + 1, 0)

  // Первый день недели (понедельник = 0)
  const firstWeekDay = (firstDay.getDay() + 6) % 7

  const days = []

  // Дни предыдущего месяца
  for (let i = firstWeekDay - 1; i >= 0; i--) {
    const date = new Date(year, month, -i)
    days.push({
      date: date.getTime(),
      dayNumber: date.getDate(),
      isOtherMonth: true,
      isCurrent: false,
      isAvailable: false,
      isLocked: date.getDate() > 31,
    })
  }

  // Дни текущего месяца
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day)
    const isCurrent = date.toDateString() === today.toDateString()

    days.push({
      date: date.getTime(),
      dayNumber: day,
      isOtherMonth: false,
      isCurrent,
      isAvailable: availableDays.includes(day),
      isLocked: day > 31,
    })
  }

  // Дни следующего месяца (только для завершения последней строки)
  const totalDays = days.length
  const remainingInLastRow = totalDays % 7
  if (remainingInLastRow > 0) {
    const daysToAdd = 7 - remainingInLastRow
    for (let day = 1; day <= daysToAdd; day++) {
      const date = new Date(year, month + 1, day)
      days.push({
        dayNumber: day,
        isLocked: true,
      })
    }
  }

  return days
})

const selectDay = (day) => {
  if (!day.isOtherMonth && !day.isLocked) {
    selectedDate.value = day.date
    console.log('Выбран день:', day.dayNumber)
  }
}

onMounted(() => {
  console.log('=== TELEGRAM WEBAPP DEBUG INFO ===')

  // 1. Основная информация о WebApp
  if (window.Telegram?.WebApp) {
    console.log('🚀 Telegram WebApp доступен!')
    console.log('WebApp объект:', window.Telegram.WebApp)

    // Основные свойства
    console.log('Версия:', window.Telegram.WebApp.version)
    console.log('Платформа:', window.Telegram.WebApp.platform)
    console.log('Цветовая схема:', window.Telegram.WebApp.colorScheme)
    console.log('Готов:', window.Telegram.WebApp.isExpanded)

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
  } else {
    console.log('❌ Telegram WebApp недоступен')
    console.log('Возможно, приложение запущено не в Telegram')
  }

  // 2. Полный объект window.Telegram
  console.log('Полный объект Telegram:', window.Telegram)

  // 3. Информация о среде выполнения
  console.log('User Agent:', navigator.userAgent)
  console.log('URL:', window.location.href)
  console.log('Referrer:', document.referrer)

  console.log('=== END DEBUG INFO ===')
})
</script>
