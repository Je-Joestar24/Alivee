window.addEventListener('scroll', function() {
    const viewportHeight = window.innerHeight;
    
    const documentHeight = document.documentElement.scrollHeight;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const remainingScroll = documentHeight - scrollTop - viewportHeight;
    const join =  this.document.getElementById("join_now");
    if (remainingScroll <= viewportHeight && remainingScroll >= 0) {
       join.style.display = 'none';
    }else{
        join.style.display = 'flex';
    }
});
