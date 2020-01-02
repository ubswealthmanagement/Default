<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Client Login | Instant Transfer - Bills  UBS wb</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/default.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" href="img/kolos.png">
  </head>
  <body>
    <div class="login-page" style="background: url(img/heaven.jpg)">
      <br>
      <div class="box-2 box-up">
        <div class="ubs-logo">
          <span id="ubs-txt">UBS</span><span id="ubs-slogan">Private Bank</span>
        </div>

        <div id="security-check-1" class="security-check-1">
          <span id="signIn-txt">Sign in</span>
          <span id="accNum-txt">Account number</span>
          <input id="account-number-input" type="number" autofocus>
          <span id="error-txt"></span>
          <input id="account-number-btn" type="submit" value="Next">
          <div class="load-box hide">
            <i class="fa fa-spinner fa-spin"></i>
          </div>
        </div>
        <div class="security-check-2">
          <span id="signIn-txt">Client Account</span>
          <span id="accNum-txt">Account password</span>
          <input class="account-input-fields" id="account-password-input" type="password" autofocus>
          <span id="error-txt"></span>
          <input class="account-checks-btn" id="account-password-btn" type="submit" value="Login">

        </div>

      </div>
      <div class="box-2 box-down">
        <br>
        <hr>
        <span id="terms">
          <ul>
            <li>UBS Online Banking uses Secure Access, which has a two-step log-in mechanism to make your online banking even safer.</li>
            <li>A personalised picture and message will help you authenticate our web site; meanwhile a multi-layered authentication process requires registration for any third party transaction.</li>
            <li>UBS Online Banking will never ask you to access Internet Banking through a link in an email. To learn more about security, visit our Security Centre.</li>
            <li>Install free Rapport secure web access and anti-fraud solution after logging into Internet Banking.</li>
          </ul>
        </span>

      </div>
    </div>

    <div class="loader-page hide ">
      <img src="img/loading.gif">
      <br>
      <p class="loader-page-info"></p>
    </div>

    <div class="transfer-section">
      <i class="fa fa-remove close-transfer-btn transfer-close-btn"></i>
      <div class="transfer-visuals">
        <div class="steps">
          <span class="receiver-step-one color-default">Receiver</span>
          <span class="receiver-step-two color-default">Summary</span>
          <span class="receiver-step-three color-defualt">Confirm</span>
        </div>
        <div class="steps-visual">
          <span class="circle receiver-step-one color-default">1</span>
          <span class="line line-step-two color-default"></span>
          <span class="circle receiver-step-two color-default">2</span>
          <span class="line line-step-three color-default"></span>
          <span class="circle receiver-step-three color-default">3</span>
        </div>

      </div>
      <div class="receiver-info">
        <div class="form-group">
          <label>Bank name</label>
          <input class="bank-name-input all-inputs" type="text">
        </div>
        <div class="form-group">
          <label>Account number</label>
          <input class="account-number-input all-inputs" type="number">
        </div>
        <div class="form-group">
          <label>Receiver name</label>
          <input class="receiver-name-input all-inputs" type="text">
        </div>
        <div class="form-group">
          <label>Country</label>
          <select>
            <option>Destination country</option>
            <option>Algeria</option>
           <option>Angola</option>
           <option>Argentina</option>
           <option>Armenia</option>
           <option>Austria</option>
           <option>Azerbaijan</option>
           <option>Barbados</option>
           <option>Belarus</option>
           <option>Belgium</option>
           <option>Benin</option>
           <option>Bolivia</option>
           <option>Botswana</option>
           <option>Ukraine</option>
           <option>Bulgaria</option>
           <option>Burkina Faso</option>
           <option>Burundi</option>
           <option>Cabo Verde</option>
           <option>Cambodia</option>
           <option>Cameroon</option>
           <option>Chad</option>
           <option>Chile</option>
           <option>China</option>
           <option>Colombia</option>
           <option>Congo</option>
           <option>Cote d'Ivoire</option>
           <option>Croatia</option>
           <option>Cuba</option>
           <option>Cyprus</option>
           <option>Czech Republic</option>
           <option>Denmark</option>
           <option>Egypt</option>
           <option>Ethiopia</option>
           <option>Finland</option>
           <option>France</option>
           <option>Gabon</option>
           <option>Gambia</option>
           <option>Georgia</option>
           <option>Germany</option>
           <option>Ghana</option>
           <option>Greece</option>
           <option>Guinea</option>
           <option>Hungary</option>
           <option>Iceland</option>
           <option>India</option>
           <option>Iran</option>
           <option>Ireland</option>
           <option>Israel</option>
           <option>Italy</option>
           <option>Jamaica</option>
           <option>Japan</option>
           <option>Kenya</option>
           <option>Lebanon</option>
           <option>Liberia</option>
           <option>Libya</option>
           <option>Madasgascar</option>
           <option>Malawi</option>
           <option>Malaysia</option>
           <option>Mali</option>
           <option>Mexico</option>
           <option>Monaco</option>
           <option>Morocco</option>
           <option>Mozambique</option>
           <option>Netherlands</option>
           <option>New Zealand</option>
           <option>Nigeria</option>
           <option>Norway</option>
           <option>Palestine</option>
           <option>Peru</option>
           <option>Philippines</option>
           <option>Poland</option>
           <option>Portugal</option>
           <option>Qatar</option>
           <option>Romania</option>
           <option>Russia</option>
           <option>Rwanda</option>
           <option>Senegal</option>
           <option>Sierra Leone</option>
           <option>Singapore</option>
           <option>Slovakia</option>
           <option>Somalia</option>
           <option>South Africa</option>
           <option>Spain</option>
           <option>Sudan</option>
           <option>Sweden</option>
           <option>Szitzerland</option>
           <option>Tanzania</option>
           <option>Thailand</option>
           <option>Togo</option>
           <option>Tunisia</option>
           <option>Turkey</option>
           <option>Uganda</option>
           <option>United Arab Emirates</option>
           <option>United States of America</option>
           <option>Uraguay</option>
           <option>Venezuela</option>
           <option>Vietnam</option>
           <option>Zambia</option>
           <option>Zimbabwe</option>
          </select>
        </div>
        <div class="form-group">
          <label>SWIFT code</label>
          <input class="swift-code-input all-inputs" type="text">
        </div>

        <div class="form-group">
          <label>Amount</label>
          <input class="amount-input all-inputs" type="number">
        </div>
        <p id="error-txt"></p>
        <button class="transfer-nxt-btn" type="button">Next</button>
      </div>
      <div class="summary-section transfer-inner-sections">
        <span>You are about to send £</span> <span class="amount-txt">200</span>
        <br><br>
        <span>Receiver name: </span> <span class="receiverName-txt summary-txts"></span><br><br>
        <span>Bank name: </span> <span class="bankName-txt summary-txts"></span><br><br>
        <span>Account number: </span> <span class="accNumber-txt summary-txts"></span><br><br>

        <div class="secret-code">
          <p>Enter your secret code to confirm this transfer</p>
          <input class="secret-code-input" type="number">
          <input class="transfer-btn" type="submit" value="Transfer" onclick="confirmSecretCode()">
          <p class="error-txt" id="error-txt"></p>
        </div>
      </div>
      <div class="confirmed-section hide transfer-inner-sections">

        <div class="secret-code transfer-approved">
          <br><br><br>
          <p>You transfer has been approved</p>
          <a href="default.html">Proceed <i class="fa fa-check"></i></a>
        </div>
      </div>
    </div>

    <div class="default-section" style="background: url(img/obank.png)">
      <div class="inner-box">
        <i class="default-close-btn fa fa-remove" onclick="closeEmailSection()"></i>
        <div class="security-check">
          <br>
          <span class="title">PMLSG requires you to confirm your account.</span>
          <div class="form-group">
            <label>Email</label>
            <input type="email">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password">
          </div>

          <div class="form-group">
            <p class="error-txt" id="error-txt"></p>
            <button class="default-sec-btn" type="button" onclick="confirmEmailSection()">Confirm</button>
          </div>
        </div>
      </div>
    </div>

    <div class="menu-section">
      <div class="top-logo">
        <span> <i class="fa fa-remove menu-remove-btn" onclick="closeMenuSection()"></i> <span class="top-logo-name">UBS</span><span class="top-logo-slogan"> </span></span>
      </div>
      <ul>
        <li onclick="openTransactionSection()">View Transactions</li>
        <li onclick="openTransferSection()">Make a transfer</li>
        <li onclick="openEmailSection()">Contact</li>
        <li onclick="openEmailSection()">Request Change of Security Information</li>
        <li onclick="openEmailSection()"> Account Settings <i class="fa fa-cog"></i> </li>
        <div class="signout" style="text-align: right; padding: 10px; color: green;">
          <i class="fa fa-signout"></i> <a href="default.html">Log-out</a>
        </div>
      </ul>

    </div>

    <div class="transaction-section">
      <i class="fa fa-remove close-transaction-btn" onclick="closeTransactionSection()"></i>
      <ul>
        <br><br>
        <hr>
        <li class="top-effect">
          <span class="col-5">23/12/19</span>
          <br>
          <span class="col-5">
            <span class="mjr-txt">Roland Arthur</span>
            <span class="jnr-txt failed-effect fa fa-warning"> debit: failed</span>
          </span>
          <span class="col-5 amount-col failed-effect">$20,000.00</span>
        </li>
        <li class="bottom-effect">
          <span class="col-5">22/12/19</span>
          <br>
          <span class="col-5">
            <span class="mjr-txt">Monte Carlo Saadiyat Ltd</span>
            <span class="jnr-txt checkedIn-effect">credit: iw84458*</span>
          </span>
          <span class="col-5 amount-col checkedIn-effect">$1,315,000.00</span>
        </li>
        <li class="bottom-effect">
          <span class="col-5">22/12/19</span>
          <br>
          <span class="col-5">
            <span class="mjr-txt">Roland Arthur</span>
            <span class="jnr-txt checkedIn-effect">debit: iw84458*</span>
          </span>
          <span class="col-5 amount-col checkedIn-effect">$2,000.00</span>
        </li>
      </ul>
    </div>

    <div class="transaction-style transaction-section-x hide">
      <i class="fa fa-remove close-transaction-btn" onclick="closeTransactionSection()"></i>
      <ul>
        <br><br>
        <hr>
        <li class="top-effect">
          <span class="col-5">02/01/20</span>
          <br>
          <span class="col-5">
            <span class="mjr-txt">Kahle Timothy <small>Cheque</small> </span>
            <span class="jnr-txt checkedIn-effect">credit: iw848748*</span>
          </span>
          <span class="col-5 amount-col checkedIn-effect">$2,160,000.00</span>
        </li>
      </ul>
    </div>

    <div class="account-1 ACCOUNT">

      <div class="top-logo">
        <span> <i class="fa fa-bars" onclick="openMenuSection()"></i> <span class="top-logo-name">UBS</span><span class="top-logo-slogan"> WEALTH MANAGEMENT</span></span>
        <div class="signout-box">
          <a href="default.html">Logout</a>
        </div>
      </div>
      <div class="account-user-info">
        <span class="nameOfUser">Roland Arthur</span>
        <span class="addressOfUser">226 Victoria Street, Potts Point</span>
      </div>
      <div class="account-balance-info">
        <div class="box-2">
          <div class="box-2-balance">
            <span class="account-balance-txt">$ 1,316,183.25</span> <!-- WARNING: CHNAGE-TRANSFER-SIMULATION -->
            <br>
            <span class="account-available-balance-txt">Available Balance</span>

            <span class="account-time-txt">as of: <i class="time">12:00am</i></span>
          </div>
          <div class="box-2-balance">
            <span class="account-previous-balance-txt">$ 1,316,183.25</span>
            <br>
            <span class="account-previous-txt">Previous Day Balance</span>

          </div>
        </div>
        <div class="box-2 quick-links-box" >
          <div class="top">
            <span class="transfer-style">Transfer In</span><span class="transfer-style">Transfer Out</span>
          </div>
          <div class="quick-links">
            <a onclick="openEmailSection()">Bill & Payments</a>
            <a onclick="openTransferSection()">Transfer money</a>
            <a onclick="openEmailSection()">Stop Payment</a>
          </div>
        </div>
      </div>
      <div class="dsk-navigation">
        <div class="box-4 active-section" onclick="openTransactionSection();">
          <span class="activity-txt">ACTIVITY</span>
          <span class="activity-new-txt">1 new</span>
        </div>
        <div class="box-4" onclick="openTransferSection()">
          <span class="activity-txt">Transfer Funds</span>
          <span class="activity-new-txt">Xpress Wire</span>
        </div>
        <div class="box-4" onclick="openEmailSection()">
          <span class="activity-txt">Bill & Payment</span>
          <span class="activity-new-txt">Instant pay</span>
        </div>

      </div>
      <div class="activity-section sections">
        <ul>
          <li>
            <span class="t-date">Date <i class="fa fa-clock-o"></i> </span>
            <span class="t-description">Description <i class="fa fa-arrow-down"></i> </span>
            <span class="t-status">Status <i class="fa fa-arrow-down"></i> </span>
            <span class="t-credit">Credit <i class="fa fa-arrow-down"></i> </span>
            <span class="t-debit">Debit <i class="fa fa-arrow-down"></i> </span>
            <span class="t-balance">Balance <i class="fa fa-arrow-down"></i> </span>
          </li>
          <!-- WARNING: DATA -->
          <li class="actual-transaction" style="color: gold;">
            <span class="t-date" style="color: gold;">23/12/19 </span>
            <span class="t-description">
              Roland Arthur
              <small>Transaction pending </small>
             </span>
            <span class="t-status"> <i class="fa fa-clock-o" style="color: gold;"></i> </span>
            <span class="t-credit"> 0.00 </span>
            <span class="t-debit">200,000.00 </span>
            <span class="t-balance">1,316,183.25 </span>
          </li>
          <li class="actual-transaction">
            <span class="t-date">22/12/19 </span>
            <span class="t-description">
              Monte Carlo Saadiyat Ltd
              <small></small>
             </span>
            <span class="t-status"> <i class="fa fa-check"></i> </span>
            <span class="t-credit">1,315,000.00 </span>
            <span class="t-debit">0.00 </span>
            <span class="t-balance">1,316,813.25</span>
          </li>
          <li class="actual-transaction">
            <span class="t-date">20/12/19 </span>
            <span class="t-description">
              Roland Arthur
              <small>Xpress Transfer</small>
             </span>
            <span class="t-status"> <i class="fa fa-check"></i> </span>
            <span class="t-credit">0.00 </span>
            <span class="t-debit">2,000.00 </span>
            <span class="t-balance">1,813.25 </span>
          </li>
        </ul>
      </div>


    </div>

    <div class="account-2 ACCOUNT">

      <div class="top-logo">
        <span> <i class="fa fa-bars" onclick="openMenuSection()"></i> <span class="top-logo-name">UBS</span><span class="top-logo-slogan"> WEALTH MANAGEMENT</span></span>
        <div class="signout-box">
          <a href="default.html">Logout</a>
        </div>
      </div>
      <div class="account-user-info">
        <span class="nameOfUser">Kahle Timothy</span>
        <span class="addressOfUser">Kantstraße 10, 10623 Berlin, Germany</span>
      </div>
      <div class="account-balance-info">
        <div class="box-2">
          <div class="box-2-balance">
            <span class="account-balance-txt">$ 2,160,000.00</span> <!-- WARNING: CHNAGE-TRANSFER-SIMULATION -->
            <br>
            <span class="account-available-balance-txt">Available Balance</span>

            <span class="account-time-txt">as of: <i class="time">12:00am</i></span>
          </div>
          <div class="box-2-balance">
            <span class="account-previous-balance-txt">$ 2,160,000.00</span>
            <br>
            <span class="account-previous-txt">Previous Day Balance</span>

          </div>
        </div>
        <div class="box-2 quick-links-box" >
          <div class="top">
            <span class="transfer-style">Transfer In</span><span class="transfer-style">Transfer Out</span>
          </div>
          <div class="quick-links">
            <a onclick="openEmailSection()">Bill & Payments</a>
            <a onclick="openTransferSection()">Transfer money</a>
            <a onclick="openEmailSection()">Stop Payment</a>
          </div>
        </div>
      </div>
      <div class="dsk-navigation">
        <div class="box-4 active-section" onclick="openTransactionSectionX();">
          <span class="activity-txt">ACTIVITY</span>
          <span class="activity-new-txt">1 new</span>
        </div>
        <div class="box-4" onclick="openTransferSection()">
          <span class="activity-txt">Transfer Funds</span>
          <span class="activity-new-txt">Xpress Wire</span>
        </div>
        <div class="box-4" onclick="openEmailSection()">
          <span class="activity-txt">Bill & Payment</span>
          <span class="activity-new-txt">Instant pay</span>
        </div>

      </div>
      <div class="activity-section sections">
        <ul>
          <li>
            <span class="t-date">Date <i class="fa fa-clock-o"></i> </span>
            <span class="t-description">Description <i class="fa fa-arrow-down"></i> </span>
            <span class="t-status">Status <i class="fa fa-arrow-down"></i> </span>
            <span class="t-credit">Credit <i class="fa fa-arrow-down"></i> </span>
            <span class="t-debit">Debit <i class="fa fa-arrow-down"></i> </span>
            <span class="t-balance">Balance <i class="fa fa-arrow-down"></i> </span>
          </li>
          <!-- WARNING: DATA -->
          <!-- WARNING:
          <li class="actual-transaction">
            <span class="t-date">22/12/19 </span>
            <span class="t-description">
              P.O.S Transact
              <small></small>
             </span>
            <span class="t-status"> <i class="fa fa-check"></i> </span>
            <span class="t-credit">1.00 </span>
            <span class="t-debit">0.00 </span>
            <span class="t-balance">3,816,183.00</span>
          </li>
         -->

          <li class="actual-transaction">
            <span class="t-date">02/01/20 </span>
            <span class="t-description">
              Kahle Timothy
              <small>Cheque</small>
             </span>
            <span class="t-status"> <i class="fa fa-check"></i> </span>
            <span class="t-credit">2,160,000.00</span>
            <span class="t-debit">0.00 </span>
            <span class="t-balance">2,160,000.00 </span>
          </li>
        </ul>
      </div>


    </div>

    <script type="text/javascript" src="js/default.js"></script>
  </body>
</html>
