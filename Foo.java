public class Foo{
    public String name = "ning";
    public static void main(String[] args) {
        Foo foo = new Foo();
        foo.gaga();
    }

    public void gaga() {
        this.doSth(()->System.out.println(Foo.this.name));
    }

    public void doSth(Callback callback){
        callback.call();
    }
    
    interface Callback{
        void call();
    }
}
