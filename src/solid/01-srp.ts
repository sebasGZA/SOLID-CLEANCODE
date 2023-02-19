(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    private httpAdapter: Object = {};
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class ProductBloc {
    private productSvc: ProductService;
    private mailer: Mailer;

    constructor(productSvc: ProductService, mailer: Mailer) {
      this.productSvc = productSvc;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productSvc.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productSvc.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["test@test.com"], "to-clients");
    }
  }

  class CartBloc {
    private cardItems: Object[] = [];

    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  class Mailer {
    private masterEmail: string = "test@test.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      emailList.forEach((email) => {
        console.log("Enviando correo al cliente:" + email, template);
      });
    }
  }

  const productSvc = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productSvc, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
