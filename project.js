function calculateGST() {

    let amount = parseFloat(document.getElementById("amount").value);
    let gstRate = parseFloat(document.getElementById("gst").value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "";
        return;
    }

    let gstAmount = (amount * gstRate) / 100;
    let total = amount + gstAmount;

    document.getElementById("result").innerHTML = `
        <p>GST Amount: ₹${gstAmount.toFixed(2)}</p>
        <p>Total Amount: ₹${total.toFixed(2)}</p>
    `;
}