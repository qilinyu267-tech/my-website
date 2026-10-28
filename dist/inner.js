const products=[
{id:1,pet:'小狗',series:'日常服饰',name:'奶油云朵针织衫',price:129,img:'item-1-2.jpg',desc:'细腻的奶油色麻花纹理，为暖暖的居家时光增添一份柔软。',colors:['奶油白'],sizes:['XS','S','M','L']},
{id:2,pet:'小狗',series:'甜心配饰',name:'珍珠蝴蝶结发卡',price:39,img:'item-1-0.jpg',desc:'豆沙粉蝴蝶结搭配珍珠中心装饰，小小细节也能很出彩。',colors:['豆沙粉'],sizes:['均码']},
{id:3,pet:'小狗',series:'散步系列',name:'蔷薇粉胸背牵引套装',price:159,img:'item-1-1.jpg',desc:'柔和蔷薇粉胸背与同色系牵引绳，适合轻松出街的搭配灵感。',colors:['蔷薇粉'],sizes:['S','M','L']},
{id:4,pet:'小猫',series:'甜心配饰',name:'甜心铃铛猫咪项圈',price:69,img:'item-1-3.jpg',desc:'粉色织带搭配精致铃铛和爱心吊饰的可爱设计。',colors:['樱花粉'],sizes:['S','M']},
{id:5,pet:'小猫',series:'散步系列',name:'丁香花猫咪胸背套装',price:139,img:'item-2-0.jpg',desc:'丁香紫胸背与配套牵引绳的猫咪用品设计概念。',colors:['丁香紫'],sizes:['S','M']},
{id:6,pet:'小狗',series:'甜心配饰',name:'小花园花朵发夹',price:49,img:'item-2-1.jpg',desc:'带有柔软花瓣细节的花朵发卡，点亮春日穿搭。',colors:['浅粉','奶油白'],sizes:['均码']},
{id:7,pet:'其他宠物',series:'散步系列',name:'兔兔奶杏迷你胸背',price:99,img:'item-2-3.jpg',desc:'为兔子设计的迷你胸背概念，实际佩戴前须确认安全与适配。',colors:['奶油杏'],sizes:['小型宠物专属']},
{id:8,pet:'小狗',series:'节日限定',name:'圣诞雪花针织衫',price:179,img:'item-2-2.jpg',desc:'节日酒红和雪花提花纹理，收藏暖暖的冬日心意。',colors:['酒红色'],sizes:['XS','S','M','L']},
{id:9,pet:'小狗',series:'季节限定',name:'春日樱花小裙装',price:169,img:'item-3-0.jpg',desc:'樱花粉配色与花朵刺绣，为春季限定造型增添浪漫。',colors:['樱花粉'],sizes:['XS','S','M']},
{id:10,pet:'小狗',series:'季节限定',name:'夏日晴空轻盈胸背',price:149,img:'item-3-1.jpg',desc:'清爽的晴空蓝网眼胸背和同色系牵引绳。',colors:['晴空蓝'],sizes:['S','M','L']},
{id:11,pet:'小猫',series:'季节限定',name:'秋日奶茶格纹围巾',price:59,img:'item-3-2.jpg',desc:'温暖焦糖格纹三角巾，让秋季搭配更有层次。',colors:['焦糖格纹'],sizes:['S','M']},
{id:12,pet:'小狗',series:'节日限定',name:'情人节心动发卡',price:49,img:'item-3-3.jpg',desc:'红粉配色的蝴蝶结发夹，是送给毛孩子的心动小礼物。',colors:['爱心红','甜心粉'],sizes:['均码']},
{id:13,pet:'其他宠物',series:'散步系列',name:'小兔丁香胸背套装',price:109,img:'item-4-0.jpg',desc:'柔和丁香紫迷你兔用胸背，实际使用请先确认体型和安全要求。',colors:['丁香紫'],sizes:['小型宠物专属']},
{id:14,pet:'其他宠物',series:'日常服饰',name:'豚鼠奶油绒睡袋',price:89,img:'item-4-1.jpg',desc:'为小型宠物设计的温暖绒布休息小窝。',colors:['奶油白'],sizes:['迷你尺寸']},
{id:15,pet:'其他宠物',series:'甜心配饰',name:'兔兔花朵软领结',price:45,img:'item-4-2.jpg',desc:'轻盈花朵造型，实际穿戴前需确认宠物舒适与安全。',colors:['雾粉色'],sizes:['小型宠物专属']},
{id:16,pet:'其他宠物',series:'散步系列',name:'奶油粉透气外出包',price:229,img:'item-4-3.jpg',desc:'柔和粉色、透气网面与便携提手的小型宠物外出包。',colors:['奶油粉'],sizes:['小型宠物']},
{id:17,pet:'小狗',series:'季节限定',name:'雨天丁香防水外套',price:189,img:'extra-item-0-0.jpg',desc:'浅紫色连帽雨衣，适合雨季灵感造型。',colors:['丁香紫'],sizes:['XS','S','M','L']},
{id:18,pet:'小狗',series:'日常服饰',name:'粉雾软绒连帽卫衣',price:149,img:'extra-item-0-1.jpg',desc:'粉雾色软绒连帽设计，舒适温柔的日常搭配。',colors:['粉雾色'],sizes:['XS','S','M','L']},
{id:19,pet:'小狗',series:'日常服饰',name:'奶油可可条纹连体衣',price:159,img:'extra-item-0-2.jpg',desc:'奶油白与可可棕条纹，简洁趣味的连体服设计。',colors:['奶油可可'],sizes:['XXS','XS','S','M']},
{id:20,pet:'小狗',series:'季节限定',name:'秋冬焦糖绗缝马甲',price:199,img:'extra-item-0-3.jpg',desc:'焦糖色轻盈绗缝廓形，适合秋冬季节的造型概念。',colors:['焦糖棕'],sizes:['S','M','L','XL']},
{id:21,pet:'小狗',series:'散步系列',name:'可可编织项圈牵引套装',price:139,img:'extra-item-1-0.jpg',desc:'可可棕织带搭配金属扣件，日常散步的精致配件。',colors:['可可棕'],sizes:['S','M','L']},
{id:22,pet:'小狗',series:'甜心配饰',name:'丁香小爱心四只袜',price:59,img:'extra-item-1-1.jpg',desc:'浅紫罗纹袜身与心形小图案，四只装的可爱灵感。',colors:['丁香紫'],sizes:['S','M']},
{id:23,pet:'小猫',series:'甜心配饰',name:'玫瑰格纹三角领巾',price:69,img:'extra-item-1-2.jpg',desc:'奶油白与浅玫瑰色格纹，柔和百搭的小配饰。',colors:['玫瑰格纹'],sizes:['S','M']},
{id:24,pet:'小狗',series:'散步系列',name:'粉樱透气便携外出包',price:259,img:'extra-item-1-3.jpg',desc:'浅粉色柔软包身和透气网面，小型犬出行灵感。',colors:['樱花粉'],sizes:['小型犬']},
{id:25,pet:'小狗',series:'日常服饰',name:'抹茶云朵麻花针织衫',price:149,img:'new-pair-0-0.jpg',desc:'淡抹茶绿的麻花针织纹理，延续 Chic Pet 柔和舒适的日常设计。',colors:['抹茶绿','奶油白','燕麦色'],sizes:['XS','S','M','L']},
{id:26,pet:'小狗',series:'日常服饰',name:'玫瑰格纹蝴蝶结小裙',price:179,img:'new-pair-0-1.jpg',desc:'粉色格纹、小蝴蝶结和轻盈裙摆，适合甜美搭配灵感。',colors:['玫瑰粉','奶油白','浅咖色'],sizes:['XS','S','M','L']},
{id:27,pet:'小狗',series:'季节限定',name:'奶油柠檬防水雨衣',price:189,img:'new-pair-0-2.jpg',desc:'柔和奶油黄色帽檐与轻盈雨衣廓形，雨季也能穿出小清新。',colors:['奶油黄','丁香紫','奶油白'],sizes:['XS','S','M','L']},
{id:28,pet:'小狗',series:'日常服饰',name:'燕麦绒拉链小马甲',price:159,img:'new-pair-0-3.jpg',desc:'低饱和燕麦色软绒面料质感与利落小立领。',colors:['燕麦色','豆沙粉','焦糖棕'],sizes:['S','M','L','XL']},
{id:29,pet:'小猫',series:'甜心配饰',name:'玫瑰花园猫咪领巾',price:75,img:'new-pair-1-0.jpg',desc:'雾粉花朵印花三角巾，轻盈地点缀猫咪造型。',colors:['雾粉色','奶油白','浅咖色'],sizes:['S','M']},
{id:30,pet:'小猫',series:'散步系列',name:'可可格纹猫咪胸背',price:149,img:'new-pair-1-1.jpg',desc:'可可棕小格纹和轻巧胸背线条，兼顾舒适与精致感的设计概念。',colors:['可可棕','豆沙粉','燕麦色'],sizes:['S','M']},
{id:31,pet:'小狗',series:'散步系列',name:'樱粉云朵外出手提包',price:279,img:'new-pair-1-2.jpg',desc:'粉色软包和透气网面，适合与毛孩子一起出行的轻奢风格。',colors:['樱花粉','奶油白','浅咖色'],sizes:['小型犬']},
{id:32,pet:'小狗',series:'甜心配饰',name:'奶油雏菊蝴蝶结发卡',price:45,img:'new-pair-1-3.jpg',desc:'淡奶油黄色蝴蝶结与小雏菊点缀，给日常增添明亮好心情。',colors:['奶油黄','豆沙粉','丁香紫'],sizes:['均码']}
];
products.forEach((p,i)=>{const sheet=Math.floor(i/4)+1,col=i%4;if(i<24){p.img='pair-'+sheet+'-'+col+'.jpg';p.worn='pair-'+sheet+'-'+(col+4)+'.jpg'}else{const group=Math.floor((i-24)/4),c=(i-24)%4;p.img='new-pair-'+group+'-'+c+'.jpg';p.worn='new-pair-'+group+'-'+(c+4)+'.jpg'}});
// 只有具备真实对应照片的颜色才能在详情页作为可切换图片的配色呈现。
products.forEach(p=>{p.photoSets=Object.fromEntries(p.colors.map(c=>[c,{flat:p.img,worn:p.worn,available:false}]))});
products.forEach(p=>{p.photoSets[p.colors[0]]={flat:p.img,worn:p.worn,available:true}});
const bag=products.find(p=>p.id===31);
bag.photoSets['奶油白']={flat:'bag-color-0.jpg',worn:'bag-color-3.jpg',available:true};
bag.photoSets['浅咖色']={flat:'bag-color-1.jpg',worn:'bag-color-4.jpg',available:true};
bag.photoSets['樱花粉']={flat:'bag-color-2.jpg',worn:'bag-color-5.jpg',available:true};
const setColorPhoto=(id,color,flat,worn)=>{const p=products.find(x=>x.id===id);p.photoSets[color]={flat,worn,available:true}};
setColorPhoto(25,'奶油白','new-color-a-0.jpg','new-color-a-4.jpg');
setColorPhoto(26,'奶油白','new-color-a-1.jpg','new-color-a-5.jpg');
setColorPhoto(27,'丁香紫','new-color-a-2.jpg','new-color-a-6.jpg');
setColorPhoto(28,'豆沙粉','new-color-a-3.jpg','new-color-a-7.jpg');
setColorPhoto(29,'奶油白','new-color-b-0.jpg','new-color-b-4.jpg');
setColorPhoto(30,'豆沙粉','new-color-b-1.jpg','new-color-b-5.jpg');
setColorPhoto(32,'丁香紫','new-color-b-2.jpg','new-color-b-6.jpg');
setColorPhoto(27,'奶油白','new-color-b-3.jpg','new-color-b-7.jpg');
products.forEach(p=>{p.colors=p.colors.filter(c=>p.photoSets[c]?.available)});
const colorCodes={'奶油白':'#F8EBD8','豆沙粉':'#D6A2AA','浅咖色':'#B89A84','燕麦色':'#D9CBB6','樱花粉':'#EAB9C1','抹茶绿':'#B7C9A7','玫瑰粉':'#DCA8B2','奶油黄':'#F3DFA4','丁香紫':'#C7B6DB','焦糖棕':'#9D6E4E','雾粉色':'#DDAFB5','可可棕':'#705044','浅粉':'#E9C1C7','奶油杏':'#E6D0B0','酒红色':'#833B49','爱心红':'#C55665','甜心粉':'#E4A8B6','晴空蓝':'#A9CBE7','焦糖格纹':'#AE8E72'};
const swatchColor=c=>colorCodes[c]||'#D4B8AF';
const nav=[['index.html','首页'],['shop.html','全部商品'],['collections.html','系列企划'],['stories.html','宠物Plog'],['impact.html','关怀行动'],['lost.html','寻宠互助'],['values.html','品牌理念'],['about.html','关于我们'],['help.html','帮助']];
const page=document.body.dataset.page||'shop';
const link=(url,label,classes='')=>'<a class="'+classes+'" href="'+url+'">'+label+'</a>';
const navHtml='<div class="topnote">CHIC PET · PET FASHION & LITTLE LOVELY THINGS ♡</div><header class="site-nav"><a class="brand" href="index.html"><img src="chic-pet-logo.png" alt="Chic Pet logo"><span>Chic Pet</span></a><nav class="navlinks" id="navlinks">'+nav.map(([u,l])=>link(u,l,u===page+'.html'?'current':'')).join('')+'</nav><div class="nav-actions">'+link('shop.html','SHOP ALL ↗')+'</div><button class="mobile-menu" onclick="document.getElementById(\'navlinks\').classList.toggle(\'show\')" aria-label="展开导航">☰</button></header>';
const footerHtml='<footer class="footer"><div class="footer-grid"><div><h3>Chic Pet ♡</h3><p>给每一位毛孩子的日常，添一点刚刚好的可爱。</p></div><div><b>发现 Chic Pet</b>'+nav.slice(1,7).map(([u,l])=>link(u,l)).join('')+'</div><div><b>服务与帮助</b>'+link('values.html','我们的价值理念')+link('lost.html','寻宠互助')+link('help.html','常见问题')+link('help.html#size','尺码指南')+link('help.html#contact','在线咨询')+'</div></div><div class="footnote">© 2026 Chic Pet · 品牌体验演示站。商品、价格、故事与公益项目均为概念展示，未启用真实交易、救助申报或真人客服。请勿将示例内容视为真实活动记录。</div></footer>';
const hero=(eyebrow,title,desc)=>'<section class="page-hero"><div class="overline">'+eyebrow+'</div><h1>'+title+'</h1><p>'+desc+'</p></section>';
const card=p=>'<article class="product" data-product="'+p.id+'"><a href="product.html?id='+p.id+'"><div class="photo"><img class="product-main" loading="lazy" src="'+p.img+'" alt="'+p.name+'商品平铺展示"><img class="product-hover" loading="lazy" src="'+p.worn+'" alt="'+p.name+'宠物穿戴展示"><span class="tag">'+p.series+'</span><button class="image-toggle" type="button" aria-label="切换'+p.name+'展示图" onclick="event.preventDefault();event.stopPropagation();this.closest(\'.photo\').classList.toggle(\'show-worn\')">⇄ 看上身</button></div><h3>'+p.name+'</h3><small>'+p.pet+' · '+p.series+'</small><div class="price">¥ '+p.price+'.00 <small>概念价</small></div></a><div class="color-swatch-row">'+p.colors.map((c,i)=>'<button type="button" title="'+c+'" aria-label="'+c+'" class="color-swatch '+(i===0?'selected':'')+'" style="--swatch:'+swatchColor(c)+'" onclick="selectCardColor(this,\''+c+'\')"></button>').join('')+'<span class="swatch-name">'+p.colors[0]+'</span></div></article>';
function selectCardColor(el,c){const box=el.closest('.product'),p=products.find(x=>x.id===Number(box.dataset.product)),photo=p.photoSets[c];el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));el.classList.add('selected');el.parentElement.querySelector('.swatch-name').textContent=c;box.querySelector('.product-main').src=photo.flat;box.querySelector('.product-hover').src=photo.worn;box.querySelector('a').href='product.html?id='+p.id+'&color='+encodeURIComponent(c);}
const cards=items=>'<div class="grid">'+items.map(card).join('')+'</div>';
function pageShop(){
 return hero('THE CHIC PET SHOP','为每一种可爱精心挑选','浏览狗狗、猫咪及其他小型宠物用品，发现日常基础款与季节主题灵感。')+
 '<section class="container"><div class="heading"><h2>找到属于它的小美好</h2><p>选择宠物类型、商品系列，或者直接搜索喜欢的款式。</p></div>'+
 '<div class="pillrow" id="petPills"></div><div class="pillrow" id="seriesPills"></div>'+
 '<div class="shop-toolbar"><input class="search" id="productSearch" placeholder="搜索针织衫、发卡、牵引绳…" aria-label="搜索商品"><span class="count" id="shopCount"></span></div><div id="shopGrid"></div></section>';
}
function pageCollections(){
 const collections=[
 {title:'Sweet Everyday · 甜心日常',note:'针织衫、蝴蝶结、项圈与温柔基础款',img:'pair-1-0.jpg',q:'日常服饰'},
 {title:'Walk in Style · 散步时光',note:'胸背、牵引绳和每次出门的小仪式感',img:'pair-1-2.jpg',q:'散步系列'},
 {title:'Little Details · 甜心配饰',note:'发夹、花朵、铃铛和精致的小点缀',img:'pair-1-1.jpg',q:'甜心配饰'}];
 const seasons=[
 ['春日樱花','Spring Bloom','pair-3-0.jpg','春日的粉色小裙装'],
 ['夏日晴空','Summer Breeze','pair-3-1.jpg','轻盈清爽的散步色彩'],
 ['秋日奶茶','Autumn Latte','pair-3-2.jpg','焦糖格纹和暖色调'],
 ['圣诞暖心','Holiday Moments','pair-2-3.jpg','酒红针织与雪花元素']];
 return hero('CHIC PET COLLECTIONS','不止一种可爱的可能','从日常穿搭到节庆限定，每个系列都有自己的故事。')+
 '<section class="container"><div class="heading"><div class="overline">THE ESSENTIALS</div><h2>经典系列</h2></div><div class="collection-grid">'+collections.map(x=>'<a class="collection-card" href="shop.html?series='+encodeURIComponent(x.q)+'"><img src="'+x.img+'" alt="'+x.title+'"><div class="copy"><h3>'+x.title+'</h3><p>'+x.note+'</p><span class="button outline">探索系列 ↗</span></div></a>').join('')+'</div></section>'+
 '<section class="container" style="background:#f5e8e4"><div class="heading"><div class="overline">SEASONAL STORIES</div><h2>季节限定</h2><p>将春夏秋冬的色彩，收藏进毛孩子的衣橱。</p></div><div class="season-strip">'+seasons.map(x=>'<a href="shop.html?series='+encodeURIComponent('季节限定')+'"><img src="'+x[2]+'" alt="'+x[0]+'"><small class="overline">'+x[1]+'</small><h3>'+x[0]+'</h3><p>'+x[3]+'</p></a>').join('')+'</div></section>'+
 '<section class="container split"><img src="pair-3-3.jpg" alt="情人节爱心发卡"><div><div class="overline">HOLIDAY CAPSULE</div><h2>一点特别的节日心意</h2><p class="muted" style="line-height:2.2">从圣诞雪花针织衫到情人节粉色蝴蝶结，小小配饰也能成为节日最可爱的仪式感。</p>'+link('shop.html?series='+encodeURIComponent('节日限定'),'浏览节日系列 ↗','button')+'</div></section>';
}
function pageJournal(){
 const journals=[['lookbook-0.jpg','Cozy Afternoon','粉色针织的慵懒午后','让柔软的色彩，陪你在咖啡香里慢下来。'],['lookbook-1.jpg','Soft Morning','猫咪的窗边日光','一条格纹小配饰，就能让晨光更有故事。'],['lookbook-2.jpg','Autumn Walks','一起走进秋日','焦糖格纹与落叶色彩，是散步最好的搭档。']];
 return hero('THE CHIC PET JOURNAL','毛孩子穿搭日记','在温柔的日光、咖啡店与秋日公园里，收藏属于宠物的日常时尚灵感。')+
 '<section class="container"><div class="editorial">'+journals.map(x=>'<a href="shop.html"><img src="'+x[0]+'" alt="'+x[2]+'"><span>'+x[1]+' · '+x[2]+'</span></a>').join('')+'</div><p class="mini-note" style="margin-top:30px">本栏目使用专门创作的品牌视觉示意，和商品目录摄影分开呈现。</p></section>'+
 '<section class="container" style="background:#f5e9e4">'+journals.map((x,i)=>'<div class="split" style="margin-bottom:70px">'+(i%2?'<div><div class="overline">LOOK '+String(i+1).padStart(2,'0')+'</div><h2>'+x[2]+'</h2><p>'+x[3]+'</p>'+link('shop.html','探索搭配灵感 ↗','button')+'</div><img src="'+x[0]+'" alt="'+x[2]+'">':'<img src="'+x[0]+'" alt="'+x[2]+'"><div><div class="overline">LOOK '+String(i+1).padStart(2,'0')+'</div><h2>'+x[2]+'</h2><p>'+x[3]+'</p>'+link('shop.html','探索搭配灵感 ↗','button')+'</div>')+'</div>').join('')+'</section>';
}
function pageAbout(){
 return hero('A LITTLE STORY ABOUT US','为小小的爱，认真打扮。','Chic Pet · 让每一次陪伴，都多一点点心动。')+
 '<section class="container split"><img src="about-0.jpg" alt="Chic Pet 设计工作室的服饰和配件灵感"><div><div class="overline">HELLO, CHIC PET</div><h2>可爱，是一种生活态度。</h2><p>我们喜欢柔软的针织、刚刚好的蝴蝶结、治愈的奶油色，也喜欢和毛孩子一起度过的每个平凡日子。</p><p>Chic Pet 将日常服饰、外出配件和充满惊喜的季节主题组合在一起，希望让每位小伙伴都找到自己的穿搭个性。</p></div></section>'+
 '<section class="container" style="background:#f6e9e5"><div class="heading"><div class="overline">OUR LITTLE PHILOSOPHY</div><h2>我们在意的小细节</h2></div><div class="info-panels"><div><b>Sweet Details</b><p>让小蝴蝶结、花朵和柔和色彩成为设计语言。</p></div><div><b>Everyday Moments</b><p>把灵感放进居家、散步和每一次陪伴。</p></div><div><b>All Little Friends</b><p>从猫狗出发，也为其他小型宠物探索合适的用品。</p></div></div></section>'+
 '<section class="container split"><div><div class="overline">THE CHIC PET WORLD</div><h2>收藏季节，收藏心动。</h2><p>从春日樱花到圣诞雪花，Chic Pet 的系列灵感随季节流转。每一款小小的配饰，都可以承载一种心情和回忆。</p>'+link('collections.html','探索系列企划 ↗','button')+'</div><img src="about-1.jpg" alt="小狗与猫咪陪伴的温暖日常"></section>';
}
function pageHelp(){
 const faqs=[
 ['Chic Pet 有哪些商品？','Chic Pet 展示日常服饰、胸背牵引、发卡、项圈、小型宠物用品以及季节与节日系列。可在“全部商品”页面按宠物类型和产品系列筛选。'],
 ['季节和节日限定系列在哪里？','请前往“系列企划”查看春日樱花、夏日晴空、秋日奶茶、圣诞暖心和情人节主题；也可以在商品页按“季节限定”或“节日限定”筛选。'],
 ['如何选择合适尺码？','建议先测量宠物胸围、颈围和背长，以具体商品尺码为准。小型宠物穿戴用品必须确认安全适配，不能仅根据体重判断。'],
 ['如何咨询商品颜色和尺码？','进入商品详情页选择颜色与尺码，点击“咨询这件商品”即可将选定信息带入在线助手。当前仅提供功能演示，真人客服尚未连接。'],
 ['是否可以下单并付款？','目前网站是品牌体验展示版本，产品名称、价格与上新状态均为演示内容，没有开启真实购物车、支付、库存或发货。'],
 ['配送范围与时间是什么？','面向中国客户的配送政策仍待品牌正式确认。真实订单功能上线前，会在此公布配送范围、运费、时效和售后条款。'],
 ['如何处理退换货？','正式交易开放后会提供完整的退换货条件及处理流程。目前尚未开展真实交易，因此暂无可执行的退换货订单。']
 ];
 return hero('WE ARE HERE TO HELP','有什么可以帮你？','商品、尺码、系列和订单相关信息，都可以从这里开始了解。')+
 '<section class="container help-grid"><aside class="help-side"><h3>帮助目录</h3>'+link('#faq','常见问题')+link('#size','尺码指南')+link('#contact','联系客服')+link('shop.html','返回全部商品')+'</aside><div><div id="faq" class="faq"><h2>常见问题</h2>'+faqs.map((x,i)=>'<details '+(i===0?'open':'')+'><summary>'+x[0]+'</summary><p>'+x[1]+'</p></details>').join('')+'</div><div id="size" style="margin-top:70px"><h2>宠物尺码指南</h2><p class="muted" style="line-height:2.2">测量胸围（前腿后方最宽处）、背长（颈部至尾根）与颈围。不同商品的衣版与可调节范围不同，优先查看单品尺码。佩戴后观察活动是否自然，并确保呼吸、行动舒适。</p></div><div id="contact" style="margin-top:65px"><h2>在线客服</h2><p class="muted">点击右下角“在线客服”，即可体验自动问答和商品信息传递。真人接待后台需要另行接入。</p><button class="button" onclick="openChat()">开始咨询 ↗</button></div></div></section>';
}
let selectedColor='',selectedSize='';
function pageProduct(){
 const id=Number(new URLSearchParams(location.search).get('id')||1),p=products.find(x=>x.id===id)||products[0];
 document.title=p.name+' | Chic Pet';
 selectedColor=new URLSearchParams(location.search).get('color')||p.colors[0];if(!p.colors.includes(selectedColor))selectedColor=p.colors[0];selectedSize=p.sizes[0];
 return '<section class="container"><div class="crumb">'+link('index.html','首页')+' / '+link('shop.html','全部商品')+' / '+p.name+'</div><div class="detail"><div><img class="detail-hero" id="detailHero" src="'+p.img+'" alt="'+p.name+'产品展示"><div class="detail-thumbs"><button class="active" onclick="switchDetailImage(this,\''+p.img+'\')"><img src="'+p.img+'" alt="产品单拍图">产品图</button><button onclick="switchDetailImage(this,\''+p.worn+'\')"><img src="'+p.worn+'" alt="宠物上身图">上身图</button></div></div><div class="detail-side"><div class="overline">CHIC PET · '+p.series+'</div><h1>'+p.name+'</h1><div class="price" style="font-size:27px">¥ '+p.price+'.00 <small>概念示例价</small></div><p>'+p.desc+'</p><p>适用专区：'+p.pet+'　|　所属系列：'+p.series+'</p><b>选择颜色</b><div class="detail-options" id="colorOptions">'+p.colors.map(c=>'<button class="option" onclick="chooseColor(this,\''+c+'\')">'+c+'</button>').join('')+'</div><b>选择尺码</b><div class="detail-options" id="sizeOptions">'+p.sizes.map(s=>'<button class="option" onclick="chooseSize(this,\''+s+'\')">'+s+'</button>').join('')+'</div><button class="button" onclick="consult('+p.id+')">咨询这件商品 ↗</button><p class="notice">Chic Pet 概念商品详情：此处的价格、颜色、尺码及库存均为演示信息，暂不支持实际购买。</p></div></div><div class="related"><div class="heading"><h2>你可能也喜欢</h2><p>同系列的小小心动</p></div>'+cards(products.filter(x=>x.id!==p.id&&(x.pet===p.pet||x.series===p.series)).slice(0,4))+'</div></section>';
}
function pageValues(){
 const factors=[['01','舒适版型','从领口、袖口到活动空间，考虑不同体型和日常行动的设计需要。'],['02','材质与触感','我们计划优先评估柔软触感、透气性与清洁便利性，并在正式发售前公布具体成分。'],['03','耐看的细节','低饱和配色、精致绣花、蝴蝶结与协调的金属件，让小配件也值得珍藏。'],['04','完整的服务','尺码说明、养护指南与透明售后，是我们希望一起交付的体验。']];
 return hero('MADE WITH LITTLE LOVE','为什么我们在意每一个细节','一件宠物衣服的价值，不止于它看起来有多可爱。')+
 '<section class="container split"><img src="new-pair-0-0.jpg" alt="柔软麻花针织衫的面料纹理"><div><div class="overline">BEHIND THE PRICE</div><h2>好看的背后，是认真。</h2><p>从贴合身体的版型、面料触感，到可以反复搭配的颜色，我们希望每件 Chic Pet 都有被长期喜爱的理由。网站价格目前为概念定价，尚非经成本和供应链核实的正式售价。</p>'+link('shop.html','探索设计系列 ↗','button')+'</div></section>'+
 '<section class="container soft-bg"><div class="heading"><div class="overline">THOUGHTFUL BY DESIGN</div><h2>一件商品的价值从哪里来？</h2></div><div class="value-grid">'+factors.map(x=>'<article class="value-card"><span class="overline">'+x[0]+'</span><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>').join('')+'</div></section>'+
 '<section class="container"><div class="heading"><div class="overline">A GENTLER FOOTPRINT</div><h2>关于可持续，我们从诚实开始。</h2><p>比起没有依据的环保口号，我们更愿意公开目标、进度与尚待验证的事项。</p></div><div class="promise-list"><div><span>01</span><div><h3>耐穿而不过时的设计</h3><p>目标：推出可跨季搭配的经典色和基础款，并提供洗护建议以延长使用寿命。</p><small>状态：设计方向，待产品验证</small></div></div><div><span>02</span><div><h3>更审慎的包装选择</h3><p>目标：评估简化包装、可回收材质和减塑选项，待供应商确认后公布实际方案。</p><small>状态：方案研究中</small></div></div><div><span>03</span><div><h3>让信息可被核实</h3><p>未来将逐项公开面料成分、产地、生产标准与相关凭证；在证据形成前不宣称获得环保认证。</p><small>状态：尚无可披露的认证或供应链审计</small></div></div></div></section>'+
 '<section class="container soft-bg center-cta"><div class="overline">SMALL CHOICES, BIG LOVE</div><h2>一起让喜欢，变得更长久。</h2><p>合适的尺码、良好的养护与理性的选购，本身就是温柔的开始。</p>'+link('help.html#size','查看尺码与养护建议 ↗','button')+'</section>';
}
function pageStories(){
 const entries=[['plog-0.jpg','COZY SUNDAY','团子的慢慢周末','在软毯上伸个懒腰，今天也要好好休息。'],['plog-1.jpg','WINDOW WATCH','奶油的窗边观察日记','窗外的小鸟，是今日最精彩的电视节目。'],['plog-2.jpg','LITTLE ADVENTURE','可可的公园散步','把落叶、阳光和散步路线一起收藏。']];
 return hero('THE LITTLE PET LOG','毛孩子的 Plog','这里不只是穿搭灵感，也收藏那些平凡却闪闪发光的陪伴时刻。')+
 '<section class="container"><div class="editorial plog-grid">'+entries.map((x,i)=>'<a class="plog-card" href="story.html?id='+(i+1)+'"><img src="'+x[0]+'" alt="宠物日记摄影示意"><div class="plog-copy"><small class="overline">PLOG 0'+(i+1)+' · '+x[1]+'</small><h3>'+x[2]+'</h3><p>'+x[3]+'</p><span>阅读完整故事 ↗ · 品牌原创情境故事</span></div></a>').join('')+'</div></section>'+
 '<section class="container soft-bg"><div class="split"><div><div class="overline">TELL US YOUR STORY</div><h2>你的毛孩子，有什么想分享的？</h2><p>欢迎分享它的名字、一件小趣事或一段温暖的陪伴记忆。收到正式投稿后，我们将核实图片授权与内容，审核通过后发布。</p><p class="mini-note" style="text-align:left">当前表单仅保存浏览器本地草稿，尚未连接接收投稿的后台，因此此处提交不等于已向品牌投稿。</p></div><form class="story-form" id="storyForm" onsubmit="saveLocalStory(event)"><label>毛孩子的名字<input id="petName" maxlength="35" required placeholder="例如：团子"></label><label>今天的故事<textarea id="petStory" maxlength="600" rows="6" required placeholder="记录一个让你心动的小瞬间…"></textarea></label><button class="button" type="submit">保存故事草稿 ♡</button><p class="form-result" id="storyResult" role="status"></p></form></div></section>';
}
const storyArticles=[
 {title:'团子的慢慢周末',english:'COZY SUNDAY',image:'plog-0.jpg',intro:'周末的计划，有时候就是和最喜欢的人一起，什么都不赶。',paragraphs:['周六早上九点，阳光刚好照进客厅，团子已经在它的小毯子上翻了三个身。它是一只喜欢安静的小卷毛狗，平日听见牵引绳的声音就会兴奋地绕圈，但每逢周末，总有一段属于自己的慢时光。','主人端着热咖啡坐到窗边。团子抬头看了一眼，又把下巴搁回毯子。窗外是熙熙攘攘的世界，屋里只有咖啡的香气、翻书的轻响和它均匀的呼吸。','快到中午时，团子终于起身，把心爱的毛绒玩具叼到主人脚边。它并没有催促，只是静静等待一个眼神。主人放下书，轻轻摸摸它的额头。','原来陪伴不需要每天都安排一场盛大的冒险。有时候，同处一个空间、一起发呆、在对方需要时靠近，就已经是最好的周末。']},
 {title:'奶油的窗边观察日记',english:'WINDOW WATCH',image:'plog-1.jpg',intro:'每一扇窗户，对好奇的猫咪来说，都是一座小小的电影院。',paragraphs:['奶油有个固定的早晨仪式。吃过早餐，它会慢悠悠地跳上窗台，尾巴沿着身体卷成一个柔软的问号。窗外的树枝、飞过的麻雀和偶尔晃动的影子，构成了它每天准时观看的节目。','有一天，窗台边落下一片金黄色的叶子。奶油先是竖起耳朵，再伸出爪子轻轻碰了一下玻璃。叶子顺着风滑走，它便专注地盯着树下，仿佛在等待故事的下一集。','主人喜欢在旁边给它拍照，却慢慢发现，奶油最动人的瞬间不是正对镜头时，而是认真观察世界的时候。微微倾斜的脑袋、轻颤的胡须，以及落在背上的午后日光，都成了珍贵的纪念。','小小的好奇心让平凡的一天生动起来。只要愿意放慢脚步，家里的窗边也能藏着无限风景。']},
 {title:'可可的公园散步',english:'LITTLE ADVENTURE',image:'plog-2.jpg',intro:'从家门口到公园的短短一段路，是可可每天最期待的旅行。',paragraphs:['傍晚五点，牵引绳刚从挂钩上取下来，可可就知道散步时间到了。它先在门口转一个圈，然后乖乖坐下，等主人整理好胸背和牵引扣。','公园里的路每天都差不多，但可可总能发现新的气味。前一天落下的叶子、刚浇过水的草地、某只狗狗留下的气息，都值得它认真研究。主人不再急着走完固定的路线，而是给它多一点探索的时间。','走到小坡上，夕阳把路面染成温柔的蜂蜜色。可可突然停下脚步，回头望着主人，眼睛亮晶晶的。主人蹲下来替它整理有些歪掉的衣领，顺便拍下一张略微模糊、却格外喜欢的照片。','回家的路上，可可走得很慢。也许最好的散步不是走了多远，而是彼此都在同一段旅程里，认真感受世界。']}
];
function pageStory(){const id=Number(new URLSearchParams(location.search).get('id')||1),s=storyArticles[id-1]||storyArticles[0];document.title=s.title+' | Chic Pet Plog';return hero('CHIC PET PLOG · '+s.english,s.title,s.intro)+'<section class="container article-layout"><img class="article-hero" src="'+s.image+'" alt="'+s.title+'故事配图"><div class="article-body"><div class="overline">A LITTLE STORY · ORIGINAL EDITORIAL</div>'+s.paragraphs.map(p=>'<p>'+p+'</p>').join('')+'<div class="article-notice">这是 Chic Pet 创作的情境短篇，人物、宠物名字和情节为文学创作，配图为品牌视觉作品，不代表真实用户投稿。</div>'+link('stories.html','← 返回宠物 Plog','button outline')+'</div></section>'}
function pageImpact(){
 const programs=[['暖冬关怀','WINTER WARMTH','计划募集适合救助站实际需求的保暖用品，并在合作与清单确定后公布。','筹备设想'],['领养故事计划','ADOPT WITH LOVE','希望与可信的救助组织合作，分享经授权、可核实的领养信息。','寻找合作伙伴'],['透明行动记录','OUR OPEN NOTEBOOK','未来每项活动都会记录日期、合作方、物资数量与交付证明。','等待首份真实记录']];
 return hero('THE LOVE WE SHARE','让温柔不只停留在穿搭。','我们希望未来能为更多流浪猫狗创造被看见、被照顾和被领养的机会。')+
 '<section class="container split"><img src="about-1.jpg" alt="猫狗温柔相处的示意照片"><div><div class="overline">CHIC PET CARES</div><h2>每一只毛孩子，都值得被温柔以待。</h2><p>除了设计可爱的宠物用品，Chic Pet 也希望逐步建立与动物救助机构的合作方式，让商品故事与真实关怀产生连接。</p><p>这是正在规划的品牌公益板块。目前尚无经过核实、可公开披露的捐赠、救助或领养成果，因此不会展示虚构数量。</p></div></section>'+
 '<section class="container soft-bg"><div class="heading"><div class="overline">OUR CARE INITIATIVES</div><h2>Chic Pet 的三项关怀行动</h2></div><div class="value-grid three">'+programs.map((x,i)=>'<a class="value-card clickable" href="care.html?id='+(i+1)+'"><small class="overline">'+x[1]+'</small><h3>'+x[0]+'</h3><p>'+x[2]+'</p><span class="status-pill">'+x[3]+'</span><p>阅读行动专题 ↗</p></a>').join('')+'</div></section>'+
 '<section class="container"><div class="heading"><div class="overline">ACTIVITY NOTEBOOK</div><h2>我们的行动记录</h2><p>这一栏为未来公开真实活动保留位置。</p></div><div class="empty-record"><span>♡</span><h3>第一份关怀记录，正在等待发生。</h3><p>目前没有已核实的活动成果。未来将按活动日期、合作机构、捐赠明细和凭证进行公开更新。</p></div><div class="center-cta">'+link('lost.html','前往寻宠互助板块 ↗','button')+'</div></section>';
}
const careArticles=[
 {title:'暖冬关怀',subtitle:'一份保暖物资清单，如何真正帮到毛孩子？',image:'new-pair-0-3.jpg',parts:[['从需要出发','气温下降时，动物救助机构需要的不只是衣物，还可能包括保暖垫、清洁用品、合适的食物和医疗消耗品。不同机构条件不同，物资必须先确认需求。'],['如何组织物资','我们设计的工作流程包括：联系正规救助机构，取得需求清单，确认物资规格与安全性，记录数量及交接情况，并在征得对方同意后公开凭证。'],['如何判断是否真正有帮助','是否按需求送达、是否符合使用条件、机构是否收到并确认，是比单纯统计“捐了多少”更重要的指标。']]},
 {title:'领养故事计划',subtitle:'让更多等待家庭的猫狗被认真看见。',image:'plog-1.jpg',parts:[['故事可以成为连接','一只动物的性格、习惯、健康情况和适合的家庭环境，比一张可爱的照片更能帮助潜在领养人理解它。'],['信息发布标准','我们制定的展示原则是：只使用获得机构授权的图文，标明实际收容方，确认信息时效，避免对领养成功作出保证。'],['负责任的领养','领养不仅是短暂的心动，还需要考虑长期时间、经济与照护能力。具体审核和领养流程应由合法机构负责。']]},
 {title:'透明行动记录',subtitle:'每一份爱心，都应该有据可查。',image:'about-1.jpg',parts:[['记录什么','活动名称、开展时间、合作机构、具体需求、物资数量、交接记录、项目负责人核验，构成一份完整的公开记录。'],['如何保护隐私','不公开救助人住址、私人联系电话或其他敏感信息。对合作方照片和动物故事取得必要授权。'],['如何更新结果','按实际完成状态标注每个环节，若暂无可核验的公开成果，就保留“未发布记录”，不以想象的数字充当成绩。']]}
];
function pageCare(){const id=Number(new URLSearchParams(location.search).get('id')||1),c=careArticles[id-1]||careArticles[0];document.title=c.title+' | Chic Pet Cares';return hero('CHIC PET CARES',c.title,c.subtitle)+'<section class="container article-layout"><img class="article-hero" src="'+c.image+'" alt="'+c.title+'专题配图"><div class="article-body">'+c.parts.map(x=>'<h2>'+x[0]+'</h2><p>'+x[1]+'</p>').join('')+'<div class="article-notice">本页介绍 Chic Pet 的关怀工作方案与披露标准，不构成已完成捐赠、救助或合作的证明。真实活动结果在核实后另行公布。</div>'+link('impact.html','← 返回关怀行动','button outline')+'</div></section>'}
function pageLost(){
 return hero('FIND OUR WAY HOME','让每一份牵挂，都有回家的方向。','为走失宠物和发现疑似走失宠物的好心人，预留一个温暖、谨慎的互助空间。')+
 '<section class="container"><div class="heading"><div class="overline">LOST & FOUND</div><h2>寻宠互助公告栏</h2><p>以下两张卡片展示信息发布后的页面格式。真实寻宠信息需要核验后才能公开。</p></div><div class="lost-grid"><article class="lost-post"><img src="plog-0.jpg" alt="狗狗示意照片"><div><span class="status-pill">寻宠信息样例</span><h3>寻找一只浅棕色卷毛小狗</h3><p>示例区域：城区公园周边</p><p>特征：小型犬，浅棕色卷毛，佩戴浅色胸背；容易受惊，请勿追赶。</p><small>演示条目 · 无真实寻宠请求</small></div></article><article class="lost-post"><img src="plog-1.jpg" alt="猫咪示意照片"><div><span class="status-pill">发现宠物样例</span><h3>发现一只奶油色长毛猫</h3><p>示例区域：居民区绿地附近</p><p>特征：浅色长毛，性格谨慎，暂未确认是否有主人。</p><small>演示条目 · 无真实发现报告</small></div></article></div><div class="help-steps"><div><strong>01</strong><h3>确认安全</h3><p>发现宠物时先确保自身与动物安全，不强行抓抱受惊动物。</p></div><div><strong>02</strong><h3>记录线索</h3><p>保留大致发现区域、时间及外貌特征，避免公开住址或敏感联系方式。</p></div><div><strong>03</strong><h3>联系当地机构</h3><p>可联系附近兽医、动物收容机构或当地正规寻宠渠道，核实芯片和主人身份。</p></div></div></section>'+
 '<section class="container soft-bg"><div class="split"><div><div class="overline">PREPARE A NOTICE</div><h2>写一份寻宠信息草稿</h2><p>用简明的描述记录线索，之后可复制到你信任的本地寻宠渠道。避免在公开平台直接展示家庭地址、电话号码等私人信息。</p><p class="mini-note" style="text-align:left">本页面目前为功能演示。信息只会保存在当前浏览器，不会公开发布或向任何组织发出求助请求。如有紧急情况，请优先联系当地相关机构。</p></div><form class="story-form" id="lostForm" onsubmit="saveLocalLost(event)"><label>信息类型<select id="lostType"><option>寻找走失宠物</option><option>发现疑似走失宠物</option></select></label><label>动物类型<select id="lostAnimal"><option>狗狗</option><option>猫咪</option><option>其他宠物</option></select></label><label>大致区域（不要填写详细住址）<input id="lostArea" required maxlength="70" placeholder="例如：某城市某区附近"></label><label>时间<input id="lostDate" type="date" required></label><label>外貌特征与情况<textarea id="lostDetail" required maxlength="800" rows="4" placeholder="体型、毛色、项圈特征等…"></textarea></label><button class="button" type="submit">在本机保存草稿</button><p class="form-result" id="lostResult" role="status"></p></form></div></section>';
}
function saveLocalStory(e){e.preventDefault();try{localStorage.setItem('chicpet-plog-draft',JSON.stringify({name:document.getElementById('petName').value,story:document.getElementById('petStory').value}));document.getElementById('storyResult').textContent='已保存在此浏览器中，尚未投稿或公开。'}catch(_){document.getElementById('storyResult').textContent='浏览器不允许保存，请自行复制文字备份。'}}
function saveLocalLost(e){e.preventDefault();try{localStorage.setItem('chicpet-lost-draft',JSON.stringify({type:document.getElementById('lostType').value,animal:document.getElementById('lostAnimal').value,area:document.getElementById('lostArea').value,date:document.getElementById('lostDate').value,detail:document.getElementById('lostDetail').value}));document.getElementById('lostResult').textContent='草稿已保存在此浏览器。此操作不会公开发布或通知救助机构。'}catch(_){document.getElementById('lostResult').textContent='浏览器不允许保存，请自行复制文字备份。'}}
const renderers={shop:pageShop,collections:pageCollections,journal:pageJournal,about:pageAbout,help:pageHelp,product:pageProduct,values:pageValues,stories:pageStories,story:pageStory,impact:pageImpact,care:pageCare,lost:pageLost};
document.getElementById('root').innerHTML=navHtml+(renderers[page]||pageShop)()+footerHtml+
'<button class="chat-launch" onclick="openChat()">♡ 在线客服</button><div class="chat" id="chat"><div class="chat-head"><b>Chic Pet 在线助手 ♡</b><button onclick="closeChat()" aria-label="关闭客服">×</button></div><div class="chat-messages" id="chatMessages"><div class="bubble">你好呀，欢迎来到 Chic Pet！我可以帮你了解商品分类、尺码以及咨询流程。</div></div><form onsubmit="sendMessage(event)"><input id="chatInput" placeholder="输入你的问题…" aria-label="输入咨询内容" required><button>发送</button></form></div>';
let activePet=new URLSearchParams(location.search).get('pet')||'全部',activeSeries=new URLSearchParams(location.search).get('series')||'全部',searchText='';
function renderShop(){
 const pp=document.getElementById('petPills');if(!pp)return;
 pp.innerHTML=['全部','小狗','小猫','其他宠物'].map(x=>'<button class="pill '+(x===activePet?'selected':'')+'" onclick="activePet=\''+x+'\';renderShop()">'+(x==='全部'?'全部宠物':x)+'</button>').join('');
 document.getElementById('seriesPills').innerHTML=['全部','日常服饰','散步系列','甜心配饰','季节限定','节日限定'].map(x=>'<button class="pill '+(x===activeSeries?'selected':'')+'" onclick="activeSeries=\''+x+'\';renderShop()">'+(x==='全部'?'全部系列':x)+'</button>').join('');
 const rows=products.filter(p=>(activePet==='全部'||p.pet===activePet)&&(activeSeries==='全部'||p.series===activeSeries)&&(!searchText||(p.name+p.pet+p.series).includes(searchText)));
 document.getElementById('shopGrid').innerHTML=rows.length?cards(rows):'<p class="mini-note" style="padding:70px">暂时没有找到符合条件的商品，试试其他筛选吧 ♡</p>';
 document.getElementById('shopCount').textContent='共 '+rows.length+' 件展示商品';
}
if(page==='shop'){renderShop();document.getElementById('productSearch').addEventListener('input',e=>{searchText=e.target.value.trim();renderShop()})}
function chooseColor(el,v){selectedColor=v;el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));el.classList.add('selected');const p=products.find(x=>x.id===Number(new URLSearchParams(location.search).get('id')||1)),photo=p.photoSets[v];if(photo){const main=document.getElementById('detailHero');main.src=photo.flat;document.querySelectorAll('.detail-thumbs button').forEach((b,i)=>{b.querySelector('img').src=i===0?photo.flat:photo.worn;b.setAttribute('onclick',"switchDetailImage(this,'"+(i===0?photo.flat:photo.worn)+"')");b.classList.toggle('active',i===0)});let n=document.getElementById('colorPhotoNote');if(!n){n=document.createElement('p');n.id='colorPhotoNote';el.parentElement.after(n)}n.textContent=photo.available?'当前展示：'+v+' · 对应商品图与宠物上身图':'「'+v+'」的实物照片尚未拍摄，当前显示原配色示意，请以正式产品图为准。';}history.replaceState(null,'','product.html?id='+p.id+'&color='+encodeURIComponent(v))}
function chooseSize(el,v){selectedSize=v;el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));el.classList.add('selected')}
function switchDetailImage(el,src){document.getElementById('detailHero').src=src;el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('active'));el.classList.add('active')}
if(page==='product'){const buttons=[...document.querySelectorAll('#colorOptions button')];chooseColor(buttons.find(b=>b.textContent===selectedColor)||buttons[0],selectedColor);document.querySelector('#sizeOptions button')?.classList.add('selected')}
function consult(id){const p=products.find(x=>x.id===id);openChat();sendText('我想咨询「'+p.name+'」，颜色：'+selectedColor+'，尺码：'+selectedSize+'。')}
function openChat(){document.getElementById('chat').classList.add('open')}function closeChat(){document.getElementById('chat').classList.remove('open')}
function addBubble(text,me){let el=document.createElement('div');el.className='bubble'+(me?' me':'');el.textContent=text;document.getElementById('chatMessages').appendChild(el);el.scrollIntoView({block:'end'})}
function sendText(t){addBubble(t,true);let response=/尺码|尺寸/.test(t)?'请参考每件商品的尺码信息并测量胸围、背长、颈围。':/配送|运费|退换/.test(t)?'配送和售后条款会在正式开售前公布。':/系列|新品|限定/.test(t)?'欢迎浏览我们的季节和节日系列，详细内容可在“系列企划”查看。':'谢谢你的咨询！当前是 Chic Pet 品牌体验演示，尚未连接真人客服或订单后台。';setTimeout(()=>addBubble(response),400)}
function sendMessage(e){e.preventDefault();const i=document.getElementById('chatInput');if(i.value.trim())sendText(i.value.trim());i.value=''}
