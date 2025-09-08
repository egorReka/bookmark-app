<template>
  <div class="index">
    <h1 class="index__title">Добро пожаловать в Bookmarkly!</h1>
    <p class="index__text">Чтобы начать пользоваться выберите категорию закладок или создайте новую.</p>
  </div>
</template>

<style scope>
.index {
  display: grid;
  place-content: flex-start;
  justify-items: center;
  align-items: center;
  height: 100%;
  padding-top: 20%;
}

.index__title {
  margin: 0 0 25px;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.02em;
}

.index__text {
  margin: 0;
  font-size: 16px;
  letter-spacing: 0.02em;
}
</style>
