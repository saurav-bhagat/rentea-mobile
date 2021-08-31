const receiptHtml = (date, amount, tenantName, address, month, ownerName) => {
	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
	<div
      style= "border: 1px solid black"
    >
      <div style = "display: grid; grid-template-columns: 75% 25% ;" >
        <div style="margin: 2% 0 0 6%">
          <h4>
            Rent Reciept
            <span style="color: grey; margin-left: 2%" >June 2021</span>
          </h4>
        </div>
        <div style=" margin-top: 7%">
          <p>Receipt No.1</p>
          <p>${date}</p>
        </div>
      </div>
      <div style=" margin: 5% 0 0 4%">
        <p>
          Received sum of INR ${amount} from ${tenantName} towards the rent of
          property located at ${address} for the period from
          ${month}
        </p>
      </div>
      <div style="margin: 5% 0 5% 4%">
        <p>
          ${ownerName}
          <span style="color: grey; margin: 0 1% 0 1%" >(Landlord)</span>
          Pan: 303302
        </p>
      </div>
    </div>

	</body>
</html>`;
};

export default receiptHtml;
