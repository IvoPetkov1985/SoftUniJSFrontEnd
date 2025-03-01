function theatrePromotions(dayType, age) {
    let singlePrice = 0;
    let result = "";
    let isAgeValid = true;

    if (age >= 0 && age <= 18) {
        switch (dayType) {
            case "Weekday": singlePrice = 12; break;
            case "Weekend": singlePrice = 15; break;
            case "Holiday": singlePrice = 5; break;
        }
    } else if (age > 18 && age <= 64) {
        switch (dayType) {
            case "Weekday": singlePrice = 18; break;
            case "Weekend": singlePrice = 20; break;
            case "Holiday": singlePrice = 12; break;
        }
    } else if (age > 64 && age <= 122) {
        switch (dayType) {
            case "Weekday": singlePrice = 12; break;
            case "Weekend": singlePrice = 15; break;
            case "Holiday": singlePrice = 10; break;
        }
    } else {
        isAgeValid = false;
        result = "Error!";
    }

    if (isAgeValid) {
        result = `${singlePrice}$`;
    }

    console.log(result);
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);