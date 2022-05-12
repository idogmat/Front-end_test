function pageLoaded(func) {
    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'interactive') {
            func();
            document.addEventListener('DOMContentLoaded', () => {
                func()
            });
        }
    })
}

const functionForExample = () => {
    console.log('Function is working');
}

pageLoaded(functionForExample)

document.addEventListener('DOMContentLoaded', () => {
    alert('page loaded');
})