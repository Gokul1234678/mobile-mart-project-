// JavaScript for Quantity Increment/Decrement start
        document.addEventListener('DOMContentLoaded', () => {
            const decrementButtons = document.querySelectorAll('.decrement');
            const incrementButtons = document.querySelectorAll('.increment');
            const quantities = document.querySelectorAll('.quantity');

            decrementButtons.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    const quantity = quantities[index];
                    let currentValue = parseInt(quantity.value);
                    if (currentValue > 1) {
                        quantity.value = currentValue - 1;
                    }
                });
            });

            incrementButtons.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    const quantity = quantities[index];
                    let currentValue = parseInt(quantity.value);
                    quantity.value = currentValue + 1;
                });
            });
        });
// JavaScript for Quantity Increment/Decrement end

