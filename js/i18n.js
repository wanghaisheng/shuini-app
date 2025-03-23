// Internationalization functionality

// Default language
let currentLanguage = 'zh';

// Language data
const translations = {
    en: {
        'hero.headline': 'Quantum Astrology Ring: The <span class="text-pink-400">Pseudo-science</span> Wonder',
        'hero.subheadline': 'Immersive 3D experience for entertainment and fun',
        'hero.cta.explore': 'Explore Product',
        'hero.cta.tryApp': 'Try App',
        'features.title': 'Magical Features of Quantum Astrology Ring',
        'features.palmScan.title': 'Palm Scanning',
        'features.palmScan.description': 'Simulates scanning your palm to generate pseudo-scientific fortune reports that will make you smile.',
        'features.mercuryRetrograde.title': 'Mercury Retrograde Alert',
        'features.mercuryRetrograde.description': 'Detects "Mercury Retrograde" and provides absurd solutions like dancing to K-pop in front of a mirror to dispel negative energy.',
        'features.moonCleanse.title': 'Full Moon Field Purification',
        'features.moonCleanse.description': 'Activates the ring\'s "quantum purification field" during full moons with spectacular visual effects to cleanse negative energy.',
        'features.talisman.title': 'Talisman Projection',
        'features.talisman.description': 'Randomly generates "ancient talisman" patterns and projects complex mysterious runes in 3D space with gorgeous light effects.',
        'features.zodiacGame.title': 'Zodiac Matching Game',
        'features.zodiacGame.description': 'Fun memory card game where you match identical zodiac symbols for casual entertainment.',
        'features.interaction.title': '3D Interactive Experience',
        'features.interaction.description': 'Drag and rotate with your mouse to view ring details and enjoy an immersive 3D interactive experience.',
        'preview.title': 'App Preview',
        'testimonials.title': 'User Reviews',
        'testimonials.review1': '"The Mercury Retrograde Alert system is so fun! I followed the advice and danced K-pop in front of a mirror, my roommate laughed until she couldn\'t breathe, but strangely, that day went particularly smoothly."',
        'testimonials.review2': '"The zodiac matching game kept me and my friends playing non-stop. The 3D effects are cool, and the talisman projection feature is also very innovative."',
        'testimonials.review3': '"As a physics student, this product made me laugh until my stomach hurt. Combining quantum mechanics and astrology in such an absurd way is actually very stress-relieving. Recommended for science students who need to decompress!"',
        'download.headline': 'Begin Your Quantum Astrology Journey Now',
        'download.subheadline': 'Download the app and explore the fun world of pseudo-science',
        'download.cta.ios': 'App Store',
        'download.cta.android': 'Google Play',
        'download.disclaimer': '* This product is purely for entertainment and has no scientific basis or medical effects',
        'footer.copyright': ' 2023 Quantum Astrology Institute. All rights reserved.'
    },
    zh: {
        'hero.headline': '融合占星玄学与量子力学的<span class="text-pink-400">伪科学</span>奇妙世界',
        'hero.subheadline': '沉浸式3D体验，让你在探索中获得乐趣',
        'hero.cta.explore': '探索产品',
        'hero.cta.tryApp': '尝试App',
        'features.title': '量子占星戒指的神奇功能',
        'features.palmScan.title': '掌纹扫描',
        'features.palmScan.description': '模拟扫描手掌，生成伪科学风格的个性化运势报告，让你会心一笑。',
        'features.mercuryRetrograde.title': '水逆预警系统',
        'features.mercuryRetrograde.description': '检测"水星逆行"，提供荒谬的解决方案，如对着镜子跳女团舞化解负能量。',
        'features.moonCleanse.title': '满月磁场净化',
        'features.moonCleanse.description': '在满月时激活戒指的"量子净化磁场"功能，通过华丽的视觉效果净化负能量。',
        'features.talisman.title': '护身符投影',
        'features.talisman.description': '随机生成"古老护身符"图案，在3D空间中投射出复杂的神秘符文，具有绚丽光效。',
        'features.zodiacGame.title': '星座配对小游戏',
        'features.zodiacGame.description': '趣味翻牌记忆类游戏，匹配相同的星座符号，带来休闲娱乐体验。',
        'features.interaction.title': '3D互动体验',
        'features.interaction.description': '通过鼠标拖拽旋转查看戒指详情，享受沉浸式的3D交互体验。',
        'preview.title': 'App 预览',
        'testimonials.title': '用户评价',
        'testimonials.review1': '"水逆预警系统太有趣了！按照建议在镜子前跳了女团舞，室友笑到岔气，但奇怪的是那天确实过得特别顺利。"',
        'testimonials.review2': '"星座配对小游戏让我和朋友玩得停不下来，3D效果很炫酷，护身符投影功能也很有新意。"',
        'testimonials.review3': '"作为物理系学生，这款产品让我笑到肚子痛。把量子力学和占星学结合得如此荒诞，反而特别解压，推荐给需要减压的理科生！"',
        'download.headline': '立即开启你的量子占星之旅',
        'download.subheadline': '下载App，探索伪科学的欢乐世界',
        'download.cta.ios': 'App Store',
        'download.cta.android': 'Google Play',
        'download.disclaimer': '* 本产品纯属娱乐，不具有任何科学依据或医疗效果',
        'footer.copyright': ' 2023 量子占星研究所. 保留所有权利.'
    }
};

// Initialize i18n functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set up language selector
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Apply initial translations
    applyTranslations();
});

// Change the current language
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        applyTranslations();
    }
}

// Apply translations to the page
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
}