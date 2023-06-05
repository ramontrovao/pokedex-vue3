<script lang="ts" setup></script>

<template>
  <div class="loading-box">
    <div />
  </div>
</template>

<style lang="scss">
    .loading-box {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        transform: rotate(45deg);
        transform-origin: 40px 40px;
    }

    .loading-box div {
        top: 32px;
        left: 32px;
        position: absolute;
        width: 32px;
        height: 32px;
        background: #fff;
        animation: loading-box 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .loading-box div:after,
    .loading-box div:before {
        content: "";
        position: absolute;
        display: block;
        width: 32px;
        height: 32px;
        background: #fff;
    }

    .loading-box div:before {
        left: -24px;
        border-radius: 50% 0 0 50%;
    }

    .loading-box div:after {
        top: -24px;
        border-radius: 50% 50% 0 0;
    }

    @keyframes loading-box {
        0% {
            transform: scale(0.95);
        }
        5% {
            transform: scale(1.1);
        }
        39% {
            transform: scale(0.85);
        }
        45% {
            transform: scale(1);
        }
        60% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0.9);
        }
    }
</style>