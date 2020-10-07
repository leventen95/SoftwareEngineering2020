public class car_park {

    private String carBrand;
    private String registPlate;

    // default constructor
    public vehicle() {
    }

    // constructor
    public vehicle(String carBrand, String regPlate) {
        this.carBrand = carBrand;
        this.registPlate = regPlate;
    }

    //getters
    public String getCarBrand() {
        return carBrand;
    }

    public String getRegistPlate() {
        return registPlate;
    }

    //setters
    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public void setColor(String registPlate) {
        this.registPlate = regPlate;
    }
}

public class Main  {

    public static void main(String[] args) {
        CarParkManager myCarPark = new CarParkManager();

        Scanner input = new Scanner(System.in);
        int menu;
        String model;

        do {
            System.out.println("Welcome to the parking");
            System.out.println("1: To Park Vehicle");
            System.out.println("2: To Departure");
            System.out.println("3: Show All Perked Vehicles");
            System.out.println("0: To Exit");

            System.out.print("Enter choice: ");

            menu = input.nextInt();
            System.out.println();

            switch (menu) {
                case 1: {
                    String vType;

                    System.out.println("Choose The Vehicle type");
                    System.out.println("C = Car");
                    System.out.println("V = VAN");
                    System.out.println("B = Motorbike");
                    vType = input.next();
                    if (vType.equals("C")) {
                        System.out.println("Enter Model");
                        model = input.next();

                        System.out.println("Enter Colour");
                        String colour = input.next();

                        System.out.println("Enter Register Plate");
                        String registPlate = input.next();

                    } else if (vType.equals("B")) {

                    } else if (vType.equals("V")) {

                    }

                    break;
                }
                case 2: {

                    break;
                }
                case 3: {
                    System.out.println("List of All Parked Vehicles : ");
                    myCarPark.printParkedVehicleDetails();

                    break;
                }

                case 0: {
                    System.out.println("\n Goodbye\n");
                    break;
                }
                default: {
                    System.out.println("Invalid option!\n");
                    break;
                }
            }
        } while (menu != 0);

    }
}