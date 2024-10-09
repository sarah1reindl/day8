new Vue({
    el: '#move',
    data() {
        return {
            imgStyle: {
                position: 'absolute',
                top: '50%',  
                left: '50%'}};},
    methods: {
        modify(event) {
            const img = this.$el.querySelector('img');
            const width = img.offsetWidth;
            const height = img.offsetHeight;
            let X2 = Math.random() * (window.innerWidth - width);
            let Y2 = Math.random() * (window.innerHeight - height);
            const o = 50; 
            
            if (event.clientX < X2 + width + o && event.clientX + o > X2) {
                X2 += width + o;}
            if (event.clientY < Y2 + height + o && event.clientY + o > Y2) {
                Y2 += height + o;}

            this.imgStyle.left = X2 + 'px';
            this.imgStyle.top = Y2 + 'px';}}});
