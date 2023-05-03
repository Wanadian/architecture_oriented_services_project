package fr.insa.msorders.model.dto;

import java.util.Arrays;
import java.util.Date;

public record OrderDto(Date date,
                       double price,
                       String[] productsIds,
                       String userID) {
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrderDto orderDto = (OrderDto) o;

        if (Double.compare(orderDto.price, price) != 0) return false;
        if (!date.equals(orderDto.date)) return false;
        // Probably incorrect - comparing Object[] arrays with Arrays.equals
        return Arrays.equals(productsIds, orderDto.productsIds);
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = date.hashCode();
        temp = Double.doubleToLongBits(price);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + Arrays.hashCode(productsIds);
        return result;
    }

    @Override
    public String toString() {
        return "OrderDto{" +
                "date=" + date +
                ", price=" + price +
                ", productsIds=" + Arrays.toString(productsIds) +
                '}';
    }
}
