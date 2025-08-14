<template>
  <div class="wrapper">
    <main class="v-rate">
      <div class="v-rate__cotainer container">
        <div class="v-rate__info info">
          <h1 class="v-rate__title title">Тарифы</h1>
          <p class="v-rate__subtitle subtitle">Выберите свой тариф</p>
        </div>
        <div class="v-rate__content">
          <swiper
            class="mySwiper v-rate__list"
            :slidesPerView="'auto'"
            :spaceBetween="20"
            :centeredSlides="true"
            :initialSlide="0"
            :loop="false"
            @swiper="onSwiperInit"
            @slideChange="onSlideChange"
          >
            <SwiperSlide v-for="(rate, index) in rates" :key="rate.id" class="v-rate__list-item">
              <div class="rate" :class="{ selected: activeIndex === index }">
                <div class="rate__inner">
                  <div class="rate__wave-top">
                    <div class="rate__image">
                      <img :src="rate.svg" alt="" />
                    </div>
                    <svg
                      viewBox="0 0 100 60"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path d="M0,20 Q25,0 50,20 T100,20 L100,0 L0,0 Z" fill="#00e5c0" />
                      <path d="M0,35 Q25,-10 56,35 T100,35 L100,0 L0,0 Z" fill="#00e5c0" />
                    </svg>
                  </div>
                  <div class="rate__content">
                    <h3 class="rate__title">{{ rate.title }}</h3>
                    <h2 class="rate__price">{{ rate.price }}</h2>

                    <ul class="rate__list">
                      <li
                        v-for="(feature, index) in rate.features"
                        :key="index"
                        class="rate__list-item"
                      >
                        <p class="rate__subtitle">✓ {{ feature }}</p>
                      </li>
                    </ul>
                    <button class="rate__button">
                      {{ activeIndex === index ? 'Выбран' : 'Купить' }}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </swiper>
        </div>
      </div>
    </main>
    <vFooter />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import vFooter from '@/components/generalComponents/v-footer.vue'

import dumbell1 from '@/assets/images/dumbell.svg'
import dumbell2 from '@/assets/images/dumbell2.svg'
import dumbell3 from '@/assets/images/dumbell3.svg'

const selectedRate = ref(null)

const rates = ref([
  {
    id: 1,
    svg: dumbell1,
    title: 'Базовый',
    price: '20$',
    features: ['1 месяц доступ', 'План тренировок', 'План питания', 'Анализ результатов'],
  },
  {
    id: 2,
    svg: dumbell2,
    title: 'Стандарт',
    price: '35$',
    features: ['1 месяц доступ', 'План тренировок', 'План питания', 'Анализ результатов'],
  },
  {
    id: 3,
    svg: dumbell3,
    title: 'Премиум',
    price: '50$',
    features: ['1 месяц доступ', 'План тренировок', 'План питания', 'Анализ результатов'],
  },
])

const activeIndex = ref(0)
const swiperRef = ref(null)

const onSwiperInit = (swiper) => {
  swiperRef.value = swiper
  activeIndex.value = swiper.realIndex
}

const onSlideChange = () => {
  if (swiperRef.value) {
    activeIndex.value = swiperRef.value.realIndex
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
