const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
  setTimeout(() =>{
    const text = document.getElementById('text')
    text.innerHTML = 'ボタンをクリックしました'
  },2000);
});