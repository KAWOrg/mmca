const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888', // 백엔드 서버 주소
        changeOrigin: true,
        pathRewrite: { '^/api': '' } // '/api'를 제거하고 백엔드로 전달 => aixos 사용시 '/api/(컨트롤러 주소)'로 사용
      }
    }
  },
  configureWebpack: {
    // Vue 컴파일러에 플래그를 명시적으로 설정
    plugins: [
      new (require('webpack')).DefinePlugin({
        __VUE_OPTIONS_API__: true, // 옵션 API를 사용 중이면 true로 설정
        __VUE_PROD_DEVTOOLS__: false, // 프로덕션 빌드에서 DevTools 비활성화
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false // hydration mismatch 세부 정보 비활성화
      })
    ]
  }
})
