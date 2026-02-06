// 图片路径检查脚本
// 在浏览器控制台中运行此脚本

const imagePaths = [
  // Header & Footer
  '/logo/pokemon9-logo.png',
  '/footer-banner.png',
  
  // Game Images
  '/slot-games.jpg',
  '/table-games.jpg',
  '/jili.png',
  '/booongo.png',
  '/ace333.png',
  
  // Bonus & Promotion
  '/welcomeBonus.jpg',
  '/promotions.jpg',
  
  // Registration & Login
  '/register.jpg',
  '/login.jpg',
  
  // Payment
  '/transaction.jpg',
  
  // Icons
  '/favicon.ico',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',
];

console.log('🔍 开始检查图片路径...\n');

let successCount = 0;
let errorCount = 0;
const results = [];

imagePaths.forEach((path, index) => {
  const img = new Image();
  
  img.onload = () => {
    successCount++;
    results.push({ path, status: '✅ OK', loaded: true });
    console.log(`✅ [${index + 1}/${imagePaths.length}] ${path} - 加载成功`);
    
    if (successCount + errorCount === imagePaths.length) {
      printSummary();
    }
  };
  
  img.onerror = () => {
    errorCount++;
    results.push({ path, status: '❌ NOT FOUND', loaded: false });
    console.error(`❌ [${index + 1}/${imagePaths.length}] ${path} - 未找到`);
    
    if (successCount + errorCount === imagePaths.length) {
      printSummary();
    }
  };
  
  img.src = path;
});

function printSummary() {
  console.log('\n' + '='.repeat(50));
  console.log('📊 检查结果汇总');
  console.log('='.repeat(50));
  console.log(`✅ 成功: ${successCount}/${imagePaths.length}`);
  console.log(`❌ 失败: ${errorCount}/${imagePaths.length}`);
  console.log('='.repeat(50));
  
  if (errorCount > 0) {
    console.log('\n❌ 未找到的图片:');
    results
      .filter(r => !r.loaded)
      .forEach(r => console.log(`   - ${r.path}`));
  }
  
  console.log('\n✅ 所有图片检查完成！');
}
