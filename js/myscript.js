var app = new Vue({

    el: '#app',

    data: {
        images : [
            {
                src : "https://lh3.googleusercontent.com/proxy/pQ291Mk3zC8EQSEQ-bC5__PtlvhjmL_BEatjOiRG8Wpd7QrTLkD_-PD14h8dr3atm27CItvXanu8w1BgIaCU-tEcn5zABrucWw",
                alt : "Cirella"
            },
            {
                src : "https://www.eurospin-viaggi.it/media/immagini/36537_n_Salerno_1.jpg",
                alt : "Salerno"
            },
            {
                src : "https://siviaggia.it/wp-content/uploads/sites/2/2019/10/la-rupe-di-amantea.jpeg",
                alt : "Amantea"
            },
            {
                src : "https://lh3.googleusercontent.com/proxy/m_29wCeuI9NOSKgL6UTQxkUiYpS3qlXPKcCjn9sNKU0SANCMmnT3H6SHI9iO9erCZ92S1Xux_Ijoo_FSq09chu1s1VIGEPmUaIYRij4AzGfueaVi4ittOlIzDg19yVdG",
                alt : "Cosenza"
            },
            {
                src : "https://www.comune-diamante.it/wp-content/uploads/2018/04/diamante1.jpg",
                alt : "Diamante"
            },
        ],

        imageIndex : 0,

    },  

    
    
    methods: {

        goRight : function () {
            this.imageIndex++
            if (this.imageIndex >= this.images.length) {
                this.imageIndex = 0;
            }
        },

        goLeft : function () {
            this.imageIndex--
            if (this.imageIndex < 0) {
                this.imageIndex = this.images.length - 1 ;
            }
        },
    
    },
  });
  