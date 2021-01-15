/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'ita-store-2021.myshopify.com',
        storefrontAccessToken: '311204e1272b9ffe82945bc6b79f6d99',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '6121883828380',
          node: document.getElementById('product-component-1610693753756'),
          moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0",
            "margin-bottom": "50px"
          },
          "text-align": "left"
        },
        "title": {
          "font-size": "26px"
        },
        "button": {
          ":hover": {
            "background-color": "#de9720"
          },
          "background-color": "#f7a824",
          ":focus": {
            "background-color": "#de9720"
          },
          "border-radius": "5px",
          "padding-left": "50px",
          "padding-right": "50px"
        },
        "price": {
          "font-size": "18px"
        },
        "compareAt": {
          "font-size": "15.299999999999999px"
        },
        "unitPrice": {
          "font-size": "15.299999999999999px"
        }
      },
      "layout": "horizontal",
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "description": true
      },
      "width": "100%",
      "text": {
        "button": "Add to cart"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          ":hover": {
            "background-color": "#de9720"
          },
          "background-color": "#f7a824",
          ":focus": {
            "background-color": "#de9720"
          },
          "border-radius": "5px",
          "padding-left": "50px",
          "padding-right": "50px"
        }
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "cart": {
      "styles": {
        "button": {
          ":hover": {
            "background-color": "#de9720"
          },
          "background-color": "#f7a824",
          ":focus": {
            "background-color": "#de9720"
          },
          "border-radius": "5px"
        }
      },
      "text": {
        "title": "カート",
        "total": "小計",
        "empty": "カートには商品がありません",
        "notice": "Shopifyのストアへ移動します",
        "button": "お会計"
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "background-color": "#f7a824",
          ":hover": {
            "background-color": "#de9720"
          },
          ":focus": {
            "background-color": "#de9720"
          }
        }
      }
    }
  },
        });
      });
    }
  })();
/*]]>*/