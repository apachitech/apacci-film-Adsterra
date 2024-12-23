const movieContainer = document.getElementById('container');
const nativeAd = document.createElement('div');
nativeAd.innerHTML = `
    <script async="async" data-cfasync="false" src="//pl25348402.profitablecpmrate.com/8c9ed8ea0734b582f81589a43afd421c/invoke.js"></script>
    <div id="container-8c9ed8ea0734b582f81589a43afd421c"></div>
`;
nativeAd.className = 'native-ad-container';
movieContainer.appendChild(nativeAd);