export default function convertDate(date: Date) {
    const stringDate = new Date(date).toLocaleDateString();

    const daysAndMonth = stringDate && stringDate.split("/").splice(0, 2).join("-");
    
    return daysAndMonth;
}
