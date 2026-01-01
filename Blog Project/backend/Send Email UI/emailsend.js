function EmailSendUI(otp) {
  return (`
  <div style="width:100%;padding:50px 0;background:#0f172a;font-family:'Segoe UI',Arial,sans-serif;">
    <div style="max-width:420px;margin:auto;background:#ffffff;
                border-radius:10px;overflow:hidden;
                box-shadow:0 20px 40px rgba(0,0,0,0.25);">
      <div style="padding:24px;text-align:center;
                  background:linear-gradient(135deg,#22c55e,#16a34a);
                  color:#ffffff;">
        <h2 style="margin:0;font-size:20px;">Password Reset</h2>
        <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">
          Secure OTP Verification
        </p>
      </div>

      <div style="padding:28px;text-align:center;">
        <p style="font-size:14px;color:#374151;margin-bottom:18px;">
          We received a request to reset your password.  
          Enter the OTP below to continue.
        </p>

        <div style="margin:22px auto;
                    background:#ecfdf5;
                    border:2px dashed #22c55e;
                    border-radius:8px;
                    padding:14px 0;
                    font-size:28px;
                    font-weight:700;
                    letter-spacing:8px;
                    color:#15803d;">
          ${otp}
        </div>

      </div>

      
    </div>
  </div>
  `);
}

module.exports = EmailSendUI;
