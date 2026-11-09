
/* Лише навігація до теорії: вправи та логіка уроків не змінюються. */
(function(){
const n=Number(document.body.dataset.lesson);if(!(n>=2&&n<=12))return;
const names={2:'Шлях програмного коду',3:'Діалог з користувачем',4:'Типи даних',5:'Від тестування коду до професії',6:'Повторення важливі',7:'Перевіримо функціонал',8:'Символи і рядки',9:'Структури даних',10:'Алгоритми',11:'Розробка програмного забезпечення',12:'Розробка і розробники'};
const official='https://it-osvita.diia.gov.ua/educational-unit/1.1_tehnologiya_navchannya_programuvannyu';
const app=document.getElementById('app');if(!app)return;
document.body.classList.add('it-has-theory');
const aside=document.createElement('aside');aside.className='it-theory';aside.setAttribute('aria-label','Теорія ІТ-студій');
const details=document.createElement('details');details.open=window.innerWidth>850;
const summary=document.createElement('summary');summary.textContent='📚 Теорія · ІТ-студії';details.appendChild(summary);
const p=document.createElement('p');p.textContent=n<=10?'Офіційний розділ ІТ-студій Дія.Освіта. Оберіть у ньому заняття '+n+' «'+names[n]+'». Завдання виконуйте на нашому сайті.':'У цьому розділі ІТ-студій лише 10 занять. Точного відповідника нашій темі немає; наведено посилання на пов’язаний розділ.';details.appendChild(p);
const a=document.createElement('a');a.href=official;a.target='_blank';a.rel='noopener noreferrer';a.textContent=n<=10?'Відкрити заняття '+n+' · '+names[n]+' ↗':'Пов’язаний розділ ІТ-студій ↗';details.appendChild(a);
const note=document.createElement('p');note.className='it-source';note.textContent='Посилання веде на сторінку розділу, а не безпосередньо на окрему теоретичну статтю.';details.appendChild(note);aside.appendChild(details);app.prepend(aside);
})();
