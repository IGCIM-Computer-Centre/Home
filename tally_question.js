(function () {
  const tallyQuestions = [
    {
        "q":  "Which of the following is the correct way to open company in Tally?",
        "source":  "Introduction",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Sales voucher and enter customer bill",
                        "Select company from company list and open it",
                        "Open GST reports from Display menu"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the correct method to open company in Tally.",
        "source":  "Introduction",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Use Round Off ledger to adjust final amount",
                        "Use Group creation under Accounts Info",
                        "Select company from company list and open it"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for open company in Tally?",
        "source":  "Introduction",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Open GST reports from Display menu",
                        "Create ledger under Sundry Debtors group",
                        "Select company from company list and open it"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct statement about open company in Tally.",
        "source":  "Introduction",
        "options":  [
                        "Select company from company list and open it",
                        "Use Receipt voucher with debtor ledger",
                        "Go to Accounts Info and create ledger",
                        "Open Payment voucher and enter payment details"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to open company in Tally?",
        "source":  "Introduction",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Use Journal voucher for adjustment entry",
                        "Select company from company list and open it",
                        "Use Payroll vouchers to calculate and post salary"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you open company in Tally?",
        "source":  "Introduction",
        "options":  [
                        "Use Credit Note for sales return entry",
                        "Open Receipt voucher and enter received amount",
                        "Use Purchase voucher and enter supplier bill",
                        "Select company from company list and open it"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for open company in Tally.",
        "source":  "Introduction",
        "options":  [
                        "Select company from company list and open it",
                        "Open Receipt voucher and enter received amount",
                        "Use Sales voucher and enter customer bill",
                        "Go to Accounts Info and create ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to open company in Tally?",
        "source":  "Introduction",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Create ledger under Sundry Debtors group",
                        "Select company from company list and open it",
                        "Go to Accounts Info and create ledger"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to open company in Tally.",
        "source":  "Introduction",
        "options":  [
                        "Add discount ledger or field in sales voucher",
                        "Open Receipt voucher and enter received amount",
                        "Use Purchase voucher and enter supplier bill",
                        "Select company from company list and open it"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to open company in Tally.",
        "source":  "Introduction",
        "options":  [
                        "Select company from company list and open it",
                        "Use Credit Note for sales return entry",
                        "Use Group creation under Accounts Info",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to create ledger in Tally?",
        "source":  "Ledgers",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Create ledger under Sundry Debtors group",
                        "Use Payroll vouchers to calculate and post salary",
                        "Go to Accounts Info and create ledger"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the correct method to create ledger in Tally.",
        "source":  "Ledgers",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Create ledger under Sundry Debtors group",
                        "Open GST reports from Display menu",
                        "Go to Accounts Info and create ledger"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for create ledger in Tally?",
        "source":  "Ledgers",
        "options":  [
                        "Select company from company list and open it",
                        "Go to Accounts Info and create ledger",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct statement about create ledger in Tally.",
        "source":  "Ledgers",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Go to Accounts Info and create ledger",
                        "Use Round Off ledger to adjust final amount",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to create ledger in Tally?",
        "source":  "Ledgers",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Use Contra voucher for cash and bank transfer",
                        "Open Payment voucher and enter payment details",
                        "Create ledger under Sundry Creditors group"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical exam, how do you create ledger in Tally?",
        "source":  "Ledgers",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Use Sales voucher and enter customer bill",
                        "Use Receipt voucher with debtor ledger",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  0
    },
    {
        "q":  "Pick the correct answer for create ledger in Tally.",
        "source":  "Ledgers",
        "options":  [
                        "Use Debit Note for purchase return entry",
                        "Use Contra voucher for cash and bank transfer",
                        "Go to Accounts Info and create ledger",
                        "Select company from company list and open it"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to create ledger in Tally?",
        "source":  "Ledgers",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Use Journal voucher for adjustment entry",
                        "Go to Accounts Info and create ledger",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to create ledger in Tally.",
        "source":  "Ledgers",
        "options":  [
                        "Use Round Off ledger to adjust final amount",
                        "Use Payroll vouchers to calculate and post salary",
                        "Go to Accounts Info and create ledger",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  2
    },
    {
        "q":  "From the given options, select how to create ledger in Tally.",
        "source":  "Ledgers",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Go to Accounts Info and create ledger",
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  1
    },
    {
        "q":  "Which of the following is the correct way to create group in Tally?",
        "source":  "Group",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Use Group creation under Accounts Info",
                        "Go to Accounts Info and create ledger",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to create group in Tally.",
        "source":  "Group",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Use Purchase voucher and enter supplier bill",
                        "Use Round Off ledger to adjust final amount",
                        "Use Group creation under Accounts Info"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for create group in Tally?",
        "source":  "Group",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Select company from company list and open it",
                        "Open Payment voucher and enter payment details",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about create group in Tally.",
        "source":  "Group",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Group creation under Accounts Info"
                    ],
        "answer":  3
    },
    {
        "q":  "What is the best way to create group in Tally?",
        "source":  "Group",
        "options":  [
                        "Open GST reports from Display menu",
                        "Use Group creation under Accounts Info",
                        "Use Credit Note for sales return entry",
                        "Use Payment voucher with expense ledger"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you create group in Tally?",
        "source":  "Group",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Use Payment voucher with expense ledger",
                        "Create ledger under Sundry Debtors group",
                        "Use Group creation under Accounts Info"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for create group in Tally.",
        "source":  "Group",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Use Debit Note for purchase return entry",
                        "Use Payment voucher with expense ledger",
                        "Go to Accounts Info and create ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to create group in Tally?",
        "source":  "Group",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Group creation under Accounts Info",
                        "Use Purchase voucher and enter supplier bill"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to create group in Tally.",
        "source":  "Group",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Use Purchase voucher and enter supplier bill",
                        "Create ledger under Sundry Debtors group",
                        "Use Group creation under Accounts Info"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to create group in Tally.",
        "source":  "Group",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Use Credit Note for sales return entry",
                        "Use Payment voucher with expense ledger",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to record payment voucher?",
        "source":  "Payment",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Credit Note for sales return entry",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to record payment voucher.",
        "source":  "Payment",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Open Payment voucher and enter payment details",
                        "Add discount ledger or field in sales voucher",
                        "Use Payroll vouchers to calculate and post salary"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option is right for record payment voucher?",
        "source":  "Payment",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Use Contra voucher for cash and bank transfer",
                        "Open Payment voucher and enter payment details",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct statement about record payment voucher.",
        "source":  "Payment",
        "options":  [
                        "Use Payment voucher with expense ledger",
                        "Open Payment voucher and enter payment details",
                        "Use Round Off ledger to adjust final amount",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to record payment voucher?",
        "source":  "Payment",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Credit Note for sales return entry",
                        "Open Payment voucher and enter payment details",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you record payment voucher?",
        "source":  "Payment",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Open Payment voucher and enter payment details",
                        "Use Receipt voucher with debtor ledger",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  1
    },
    {
        "q":  "Pick the correct answer for record payment voucher.",
        "source":  "Payment",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Open Payment voucher and enter payment details",
                        "Use Receipt voucher with debtor ledger",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to record payment voucher?",
        "source":  "Payment",
        "options":  [
                        "Create ledger under Sundry Creditors group",
                        "Open Payment voucher and enter payment details",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to record payment voucher.",
        "source":  "Payment",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Sales voucher and enter customer bill",
                        "Use Group creation under Accounts Info"
                    ],
        "answer":  0
    },
    {
        "q":  "From the given options, select how to record payment voucher.",
        "source":  "Payment",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Select company from company list and open it",
                        "Create ledger under Sundry Debtors group",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to record receipt voucher?",
        "source":  "Reciept",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Create ledger under Sundry Creditors group",
                        "Use Group creation under Accounts Info",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to record receipt voucher.",
        "source":  "Reciept",
        "options":  [
                        "Use Debit Note for purchase return entry",
                        "Open Receipt voucher and enter received amount",
                        "Create ledger under Sundry Debtors group",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option is right for record receipt voucher?",
        "source":  "Reciept",
        "options":  [
                        "Use Round Off ledger to adjust final amount",
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Debit Note for purchase return entry",
                        "Open Receipt voucher and enter received amount"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct statement about record receipt voucher.",
        "source":  "Reciept",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Use Debit Note for purchase return entry",
                        "Go to Accounts Info and create ledger",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to record receipt voucher?",
        "source":  "Reciept",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Use Receipt voucher with debtor ledger",
                        "Open Receipt voucher and enter received amount",
                        "Use Purchase voucher and enter supplier bill"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you record receipt voucher?",
        "source":  "Reciept",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Use Payment voucher with expense ledger",
                        "Create ledger under Sundry Debtors group",
                        "Open Receipt voucher and enter received amount"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for record receipt voucher.",
        "source":  "Reciept",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Select company from company list and open it",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Open Receipt voucher and enter received amount"
                    ],
        "answer":  3
    },
    {
        "q":  "Which step is correct to record receipt voucher?",
        "source":  "Reciept",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Open Receipt voucher and enter received amount",
                        "Use Sales voucher and enter customer bill",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to record receipt voucher.",
        "source":  "Reciept",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Open Receipt voucher and enter received amount",
                        "Open GST reports from Display menu",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to record receipt voucher.",
        "source":  "Reciept",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Add discount ledger or field in sales voucher",
                        "Use Journal voucher for adjustment entry",
                        "Open Receipt voucher and enter received amount"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to record cash deposit in bank?",
        "source":  "Contra",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Group creation under Accounts Info",
                        "Open GST reports from Display menu"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to record cash deposit in bank.",
        "source":  "Contra",
        "options":  [
                        "Create ledger under Sundry Creditors group",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Sales voucher and enter customer bill",
                        "Use Payment voucher with expense ledger"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option is right for record cash deposit in bank?",
        "source":  "Contra",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Use Payroll vouchers to calculate and post salary",
                        "Open Payment voucher and enter payment details",
                        "Select company from company list and open it"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about record cash deposit in bank.",
        "source":  "Contra",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Use Purchase voucher and enter supplier bill",
                        "Create ledger under Sundry Debtors group",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  3
    },
    {
        "q":  "What is the best way to record cash deposit in bank?",
        "source":  "Contra",
        "options":  [
                        "Add discount ledger or field in sales voucher",
                        "Use Contra voucher for cash and bank transfer",
                        "Create ledger under Sundry Creditors group",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you record cash deposit in bank?",
        "source":  "Contra",
        "options":  [
                        "Open GST reports from Display menu",
                        "Use Debit Note for purchase return entry",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Purchase voucher and enter supplier bill"
                    ],
        "answer":  2
    },
    {
        "q":  "Pick the correct answer for record cash deposit in bank.",
        "source":  "Contra",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Create ledger under Sundry Debtors group",
                        "Use Contra voucher for cash and bank transfer",
                        "Select company from company list and open it"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to record cash deposit in bank?",
        "source":  "Contra",
        "options":  [
                        "Use Receipt voucher with debtor ledger",
                        "Use Contra voucher for cash and bank transfer",
                        "Open GST reports from Display menu",
                        "Use Group creation under Accounts Info"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to record cash deposit in bank.",
        "source":  "Contra",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Use Sales voucher and enter customer bill",
                        "Use Purchase voucher and enter supplier bill",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  0
    },
    {
        "q":  "From the given options, select how to record cash deposit in bank.",
        "source":  "Contra",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Create ledger under Sundry Debtors group",
                        "Use Payment voucher with expense ledger",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to pass adjustment entry?",
        "source":  "Journal",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Use Payment voucher with expense ledger",
                        "Go to Accounts Info and create ledger",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the correct method to pass adjustment entry.",
        "source":  "Journal",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Debit Note for purchase return entry",
                        "Go to Accounts Info and create ledger",
                        "Open Payment voucher and enter payment details"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option is right for pass adjustment entry?",
        "source":  "Journal",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Group creation under Accounts Info",
                        "Create ledger under Sundry Debtors group",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about pass adjustment entry.",
        "source":  "Journal",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Round Off ledger to adjust final amount",
                        "Use Group creation under Accounts Info",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  3
    },
    {
        "q":  "What is the best way to pass adjustment entry?",
        "source":  "Journal",
        "options":  [
                        "Use Round Off ledger to adjust final amount",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Journal voucher for adjustment entry",
                        "Select GST enabled item and tax ledgers in voucher"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you pass adjustment entry?",
        "source":  "Journal",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Use Round Off ledger to adjust final amount",
                        "Use Journal voucher for adjustment entry",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  2
    },
    {
        "q":  "Pick the correct answer for pass adjustment entry.",
        "source":  "Journal",
        "options":  [
                        "Add discount ledger or field in sales voucher",
                        "Select company from company list and open it",
                        "Use Journal voucher for adjustment entry",
                        "Use Group creation under Accounts Info"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to pass adjustment entry?",
        "source":  "Journal",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Use Journal voucher for adjustment entry",
                        "Open Payment voucher and enter payment details",
                        "Create ledger under Sundry Creditors group"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to pass adjustment entry.",
        "source":  "Journal",
        "options":  [
                        "Use Receipt voucher with debtor ledger",
                        "Use Journal voucher for adjustment entry",
                        "Use Sales voucher and enter customer bill",
                        "Use Payment voucher with expense ledger"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to pass adjustment entry.",
        "source":  "Journal",
        "options":  [
                        "Use Debit Note for purchase return entry",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Round Off ledger to adjust final amount",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to record purchase invoice?",
        "source":  "Purchase",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Purchase voucher and enter supplier bill",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the correct method to record purchase invoice.",
        "source":  "Purchase",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Purchase voucher and enter supplier bill",
                        "Open Payment voucher and enter payment details",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option is right for record purchase invoice?",
        "source":  "Purchase",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Open Payment voucher and enter payment details",
                        "Open Receipt voucher and enter received amount",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about record purchase invoice.",
        "source":  "Purchase",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Debit Note for purchase return entry",
                        "Use Payment voucher with expense ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to record purchase invoice?",
        "source":  "Purchase",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Use Purchase voucher and enter supplier bill",
                        "Use Payment voucher with expense ledger",
                        "Select GST enabled item and tax ledgers in voucher"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you record purchase invoice?",
        "source":  "Purchase",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Use Debit Note for purchase return entry",
                        "Open GST reports from Display menu",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "Pick the correct answer for record purchase invoice.",
        "source":  "Purchase",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Use Purchase voucher and enter supplier bill",
                        "Create ledger under Sundry Creditors group",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to record purchase invoice?",
        "source":  "Purchase",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Purchase voucher and enter supplier bill",
                        "Select company from company list and open it",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to record purchase invoice.",
        "source":  "Purchase",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Use Purchase voucher and enter supplier bill",
                        "Select company from company list and open it",
                        "Use Payroll vouchers to calculate and post salary"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to record purchase invoice.",
        "source":  "Purchase",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Select company from company list and open it",
                        "Use Receipt voucher with debtor ledger",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to record sales invoice?",
        "source":  "Sales",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Use Payroll vouchers to calculate and post salary",
                        "Open Receipt voucher and enter received amount",
                        "Select GST enabled item and tax ledgers in voucher"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to record sales invoice.",
        "source":  "Sales",
        "options":  [
                        "Use Credit Note for sales return entry",
                        "Use Sales voucher and enter customer bill",
                        "Use Journal voucher for adjustment entry",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  1
    },
    {
        "q":  "Which option is right for record sales invoice?",
        "source":  "Sales",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Open Receipt voucher and enter received amount",
                        "Use Group creation under Accounts Info",
                        "Select company from company list and open it"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about record sales invoice.",
        "source":  "Sales",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Credit Note for sales return entry",
                        "Create ledger under Sundry Debtors group",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  3
    },
    {
        "q":  "What is the best way to record sales invoice?",
        "source":  "Sales",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Use Sales voucher and enter customer bill",
                        "Use Payroll vouchers to calculate and post salary",
                        "Go to Accounts Info and create ledger"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you record sales invoice?",
        "source":  "Sales",
        "options":  [
                        "Select company from company list and open it",
                        "Use Debit Note for purchase return entry",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for record sales invoice.",
        "source":  "Sales",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Open Payment voucher and enter payment details",
                        "Open GST reports from Display menu",
                        "Use Purchase voucher and enter supplier bill"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to record sales invoice?",
        "source":  "Sales",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Use Payment voucher with expense ledger",
                        "Use Payroll vouchers to calculate and post salary",
                        "Select company from company list and open it"
                    ],
        "answer":  0
    },
    {
        "q":  "Identify the correct process to record sales invoice.",
        "source":  "Sales",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Use Journal voucher for adjustment entry",
                        "Use Round Off ledger to adjust final amount",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  0
    },
    {
        "q":  "From the given options, select how to record sales invoice.",
        "source":  "Sales",
        "options":  [
                        "Create ledger under Sundry Creditors group",
                        "Use Sales voucher and enter customer bill",
                        "Use Receipt voucher with debtor ledger",
                        "Open Receipt voucher and enter received amount"
                    ],
        "answer":  1
    },
    {
        "q":  "Which of the following is the correct way to apply discount in voucher?",
        "source":  "Discount",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Group creation under Accounts Info",
                        "Create ledger under Sundry Creditors group",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the correct method to apply discount in voucher.",
        "source":  "Discount",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Use Journal voucher for adjustment entry",
                        "Use Payroll vouchers to calculate and post salary",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for apply discount in voucher?",
        "source":  "Discount",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Receipt voucher with debtor ledger",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct statement about apply discount in voucher.",
        "source":  "Discount",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Use Receipt voucher with debtor ledger",
                        "Create ledger under Sundry Debtors group",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  3
    },
    {
        "q":  "What is the best way to apply discount in voucher?",
        "source":  "Discount",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Add discount ledger or field in sales voucher",
                        "Use Payment voucher with expense ledger",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you apply discount in voucher?",
        "source":  "Discount",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Use Credit Note for sales return entry",
                        "Use Contra voucher for cash and bank transfer",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for apply discount in voucher.",
        "source":  "Discount",
        "options":  [
                        "Create ledger under Sundry Creditors group",
                        "Add discount ledger or field in sales voucher",
                        "Use Payment voucher with expense ledger",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to apply discount in voucher?",
        "source":  "Discount",
        "options":  [
                        "Use Payment voucher with expense ledger",
                        "Create ledger under Sundry Creditors group",
                        "Add discount ledger or field in sales voucher",
                        "Use Purchase voucher and enter supplier bill"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to apply discount in voucher.",
        "source":  "Discount",
        "options":  [
                        "Add discount ledger or field in sales voucher",
                        "Use Payroll vouchers to calculate and post salary",
                        "Create ledger under Sundry Debtors group",
                        "Create ledger under Sundry Creditors group"
                    ],
        "answer":  0
    },
    {
        "q":  "From the given options, select how to apply discount in voucher.",
        "source":  "Discount",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Add discount ledger or field in sales voucher",
                        "Use Round Off ledger to adjust final amount",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  1
    },
    {
        "q":  "Which of the following is the correct way to adjust round off amount?",
        "source":  "Round Off",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Create ledger under Sundry Debtors group",
                        "Use Purchase voucher and enter supplier bill",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the correct method to adjust round off amount.",
        "source":  "Round Off",
        "options":  [
                        "Add discount ledger or field in sales voucher",
                        "Use Receipt voucher with debtor ledger",
                        "Use Credit Note for sales return entry",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for adjust round off amount?",
        "source":  "Round Off",
        "options":  [
                        "Use Round Off ledger to adjust final amount",
                        "Open Receipt voucher and enter received amount",
                        "Use Credit Note for sales return entry",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about adjust round off amount.",
        "source":  "Round Off",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Use Round Off ledger to adjust final amount",
                        "Go to Accounts Info and create ledger",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to adjust round off amount?",
        "source":  "Round Off",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Open GST reports from Display menu",
                        "Use Round Off ledger to adjust final amount",
                        "Create ledger under Sundry Creditors group"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you adjust round off amount?",
        "source":  "Round Off",
        "options":  [
                        "Select company from company list and open it",
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Sales voucher and enter customer bill",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for adjust round off amount.",
        "source":  "Round Off",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Create ledger under Sundry Creditors group",
                        "Use Round Off ledger to adjust final amount",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to adjust round off amount?",
        "source":  "Round Off",
        "options":  [
                        "Use Round Off ledger to adjust final amount",
                        "Create ledger under Sundry Creditors group",
                        "Use Journal voucher for adjustment entry",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  0
    },
    {
        "q":  "Identify the correct process to adjust round off amount.",
        "source":  "Round Off",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Use Payment voucher with expense ledger",
                        "Use Round Off ledger to adjust final amount",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  2
    },
    {
        "q":  "From the given options, select how to adjust round off amount.",
        "source":  "Round Off",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Use Round Off ledger to adjust final amount",
                        "Open GST reports from Display menu",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  1
    },
    {
        "q":  "Which of the following is the correct way to apply GST in invoice?",
        "source":  "GST",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Group creation under Accounts Info",
                        "Open Payment voucher and enter payment details",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to apply GST in invoice.",
        "source":  "GST",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Select company from company list and open it",
                        "Open Payment voucher and enter payment details",
                        "Use Payroll vouchers to calculate and post salary"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option is right for apply GST in invoice?",
        "source":  "GST",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Use Credit Note for sales return entry",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Purchase voucher and enter supplier bill"
                    ],
        "answer":  2
    },
    {
        "q":  "Choose the correct statement about apply GST in invoice.",
        "source":  "GST",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Purchase voucher and enter supplier bill",
                        "Select company from company list and open it",
                        "Open Receipt voucher and enter received amount"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to apply GST in invoice?",
        "source":  "GST",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Open Payment voucher and enter payment details",
                        "Use Purchase voucher and enter supplier bill",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical exam, how do you apply GST in invoice?",
        "source":  "GST",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Create ledger under Sundry Creditors group",
                        "Use Payroll vouchers to calculate and post salary",
                        "Select company from company list and open it"
                    ],
        "answer":  0
    },
    {
        "q":  "Pick the correct answer for apply GST in invoice.",
        "source":  "GST",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Journal voucher for adjustment entry",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to apply GST in invoice?",
        "source":  "GST",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Create ledger under Sundry Creditors group",
                        "Select company from company list and open it",
                        "Open Receipt voucher and enter received amount"
                    ],
        "answer":  0
    },
    {
        "q":  "Identify the correct process to apply GST in invoice.",
        "source":  "GST",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Go to Accounts Info and create ledger",
                        "Use Receipt voucher with debtor ledger",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  0
    },
    {
        "q":  "From the given options, select how to apply GST in invoice.",
        "source":  "GST",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Create ledger under Sundry Creditors group",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  2
    },
    {
        "q":  "Which of the following is the correct way to process salary in Tally?",
        "source":  "Payroll",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Credit Note for sales return entry",
                        "Use Purchase voucher and enter supplier bill",
                        "Use Payroll vouchers to calculate and post salary"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the correct method to process salary in Tally.",
        "source":  "Payroll",
        "options":  [
                        "Use Purchase voucher and enter supplier bill",
                        "Open Receipt voucher and enter received amount",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Payroll vouchers to calculate and post salary"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for process salary in Tally?",
        "source":  "Payroll",
        "options":  [
                        "Use Payment voucher with expense ledger",
                        "Use Payroll vouchers to calculate and post salary",
                        "Open GST reports from Display menu",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct statement about process salary in Tally.",
        "source":  "Payroll",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Select company from company list and open it",
                        "Open GST reports from Display menu",
                        "Use Payment voucher with expense ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to process salary in Tally?",
        "source":  "Payroll",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Purchase voucher and enter supplier bill",
                        "Use Credit Note for sales return entry",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical exam, how do you process salary in Tally?",
        "source":  "Payroll",
        "options":  [
                        "Add discount ledger or field in sales voucher",
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Credit Note for sales return entry",
                        "Use Payment voucher with expense ledger"
                    ],
        "answer":  1
    },
    {
        "q":  "Pick the correct answer for process salary in Tally.",
        "source":  "Payroll",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Select company from company list and open it",
                        "Use Payroll vouchers to calculate and post salary"
                    ],
        "answer":  3
    },
    {
        "q":  "Which step is correct to process salary in Tally?",
        "source":  "Payroll",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Use Sales voucher and enter customer bill",
                        "Use Payroll vouchers to calculate and post salary",
                        "Go to Accounts Info and create ledger"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to process salary in Tally.",
        "source":  "Payroll",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Payroll vouchers to calculate and post salary",
                        "Open Receipt voucher and enter received amount",
                        "Open GST reports from Display menu"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to process salary in Tally.",
        "source":  "Payroll",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Purchase voucher and enter supplier bill",
                        "Open Receipt voucher and enter received amount",
                        "Open Payment voucher and enter payment details"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to create customer ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Go to Accounts Info and create ledger",
                        "Open Payment voucher and enter payment details",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  0
    },
    {
        "q":  "Select the correct method to create customer ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Create ledger under Sundry Creditors group",
                        "Use Payroll vouchers to calculate and post salary",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for create customer ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Use Payment voucher with expense ledger",
                        "Open Receipt voucher and enter received amount",
                        "Select GST enabled item and tax ledgers in voucher"
                    ],
        "answer":  0
    },
    {
        "q":  "Choose the correct statement about create customer ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Create ledger under Sundry Creditors group",
                        "Create ledger under Sundry Debtors group",
                        "Open GST reports from Display menu",
                        "Open Receipt voucher and enter received amount"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to create customer ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Use Sales voucher and enter customer bill",
                        "Open GST reports from Display menu",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical exam, how do you create customer ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Use Round Off ledger to adjust final amount",
                        "Create ledger under Sundry Debtors group",
                        "Open Receipt voucher and enter received amount",
                        "Open Payment voucher and enter payment details"
                    ],
        "answer":  1
    },
    {
        "q":  "Pick the correct answer for create customer ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Open Payment voucher and enter payment details",
                        "Create ledger under Sundry Debtors group",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to create customer ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Open Payment voucher and enter payment details",
                        "Use Round Off ledger to adjust final amount",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  3
    },
    {
        "q":  "Identify the correct process to create customer ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Create ledger under Sundry Debtors group",
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  1
    },
    {
        "q":  "From the given options, select how to create customer ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Use Payment voucher with expense ledger",
                        "Use Journal voucher for adjustment entry",
                        "Use Receipt voucher with debtor ledger",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to create supplier ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Create ledger under Sundry Creditors group",
                        "Use Journal voucher for adjustment entry",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to create supplier ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Create ledger under Sundry Creditors group",
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Journal voucher for adjustment entry",
                        "Use Payment voucher with expense ledger"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option is right for create supplier ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Create ledger under Sundry Creditors group",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct statement about create supplier ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Use Sales voucher and enter customer bill",
                        "Open Receipt voucher and enter received amount",
                        "Create ledger under Sundry Creditors group",
                        "Create ledger under Sundry Debtors group"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to create supplier ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Create ledger under Sundry Creditors group",
                        "Select company from company list and open it",
                        "Use Round Off ledger to adjust final amount",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical exam, how do you create supplier ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Create ledger under Sundry Creditors group",
                        "Use Payroll vouchers to calculate and post salary",
                        "Open GST reports from Display menu"
                    ],
        "answer":  1
    },
    {
        "q":  "Pick the correct answer for create supplier ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Open Payment voucher and enter payment details",
                        "Create ledger under Sundry Creditors group",
                        "Use Payroll vouchers to calculate and post salary"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to create supplier ledger?",
        "source":  "Ledgers",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Journal voucher for adjustment entry",
                        "Use Round Off ledger to adjust final amount",
                        "Create ledger under Sundry Creditors group"
                    ],
        "answer":  3
    },
    {
        "q":  "Identify the correct process to create supplier ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Add discount ledger or field in sales voucher",
                        "Create ledger under Sundry Debtors group",
                        "Open GST reports from Display menu",
                        "Create ledger under Sundry Creditors group"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to create supplier ledger.",
        "source":  "Ledgers",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Create ledger under Sundry Creditors group",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  1
    },
    {
        "q":  "Which of the following is the correct way to record electricity bill payment?",
        "source":  "Payment",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Use Purchase voucher and enter supplier bill",
                        "Use Payment voucher with expense ledger",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the correct method to record electricity bill payment.",
        "source":  "Payment",
        "options":  [
                        "Use Payment voucher with expense ledger",
                        "Create ledger under Sundry Creditors group",
                        "Open GST reports from Display menu",
                        "Select company from company list and open it"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option is right for record electricity bill payment?",
        "source":  "Payment",
        "options":  [
                        "Use Receipt voucher with debtor ledger",
                        "Use Payment voucher with expense ledger",
                        "Use Payroll vouchers to calculate and post salary",
                        "Select GST enabled item and tax ledgers in voucher"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct statement about record electricity bill payment.",
        "source":  "Payment",
        "options":  [
                        "Use Debit Note for purchase return entry",
                        "Use Payment voucher with expense ledger",
                        "Open Payment voucher and enter payment details",
                        "Go to Accounts Info and create ledger"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to record electricity bill payment?",
        "source":  "Payment",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Open Payment voucher and enter payment details",
                        "Use Payment voucher with expense ledger",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  2
    },
    {
        "q":  "In practical exam, how do you record electricity bill payment?",
        "source":  "Payment",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Use Payment voucher with expense ledger",
                        "Go to Accounts Info and create ledger",
                        "Open GST reports from Display menu"
                    ],
        "answer":  1
    },
    {
        "q":  "Pick the correct answer for record electricity bill payment.",
        "source":  "Payment",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Use Group creation under Accounts Info",
                        "Use Payment voucher with expense ledger",
                        "Add discount ledger or field in sales voucher"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to record electricity bill payment?",
        "source":  "Payment",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Open Payment voucher and enter payment details",
                        "Use Receipt voucher with debtor ledger",
                        "Use Payment voucher with expense ledger"
                    ],
        "answer":  3
    },
    {
        "q":  "Identify the correct process to record electricity bill payment.",
        "source":  "Payment",
        "options":  [
                        "Select company from company list and open it",
                        "Use Journal voucher for adjustment entry",
                        "Open GST reports from Display menu",
                        "Use Payment voucher with expense ledger"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to record electricity bill payment.",
        "source":  "Payment",
        "options":  [
                        "Use Payment voucher with expense ledger",
                        "Go to Accounts Info and create ledger",
                        "Use Round Off ledger to adjust final amount",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  0
    },
    {
        "q":  "Which of the following is the correct way to record cash received from customer?",
        "source":  "Reciept",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Use Receipt voucher with debtor ledger",
                        "Go to Accounts Info and create ledger",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  1
    },
    {
        "q":  "Select the correct method to record cash received from customer.",
        "source":  "Reciept",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Sales voucher and enter customer bill",
                        "Add discount ledger or field in sales voucher",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for record cash received from customer?",
        "source":  "Reciept",
        "options":  [
                        "Use Credit Note for sales return entry",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Add discount ledger or field in sales voucher",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct statement about record cash received from customer.",
        "source":  "Reciept",
        "options":  [
                        "Use Receipt voucher with debtor ledger",
                        "Use Payroll vouchers to calculate and post salary",
                        "Select company from company list and open it",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  0
    },
    {
        "q":  "What is the best way to record cash received from customer?",
        "source":  "Reciept",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Use Receipt voucher with debtor ledger",
                        "Add discount ledger or field in sales voucher",
                        "Open Payment voucher and enter payment details"
                    ],
        "answer":  1
    },
    {
        "q":  "In practical exam, how do you record cash received from customer?",
        "source":  "Reciept",
        "options":  [
                        "Use Credit Note for sales return entry",
                        "Use Payroll vouchers to calculate and post salary",
                        "Open Payment voucher and enter payment details",
                        "Use Receipt voucher with debtor ledger"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for record cash received from customer.",
        "source":  "Reciept",
        "options":  [
                        "Use Credit Note for sales return entry",
                        "Use Sales voucher and enter customer bill",
                        "Use Receipt voucher with debtor ledger",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  2
    },
    {
        "q":  "Which step is correct to record cash received from customer?",
        "source":  "Reciept",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Receipt voucher with debtor ledger",
                        "Go to Accounts Info and create ledger"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to record cash received from customer.",
        "source":  "Reciept",
        "options":  [
                        "Use Receipt voucher with debtor ledger",
                        "Use Sales voucher and enter customer bill",
                        "Create ledger under Sundry Creditors group",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  0
    },
    {
        "q":  "From the given options, select how to record cash received from customer.",
        "source":  "Reciept",
        "options":  [
                        "Use Payroll vouchers to calculate and post salary",
                        "Select company from company list and open it",
                        "Use Receipt voucher with debtor ledger",
                        "Select GST enabled item and tax ledgers in voucher"
                    ],
        "answer":  2
    },
    {
        "q":  "Which of the following is the correct way to record purchase return?",
        "source":  "Purchase",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Use Credit Note for sales return entry",
                        "Use Debit Note for purchase return entry",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the correct method to record purchase return.",
        "source":  "Purchase",
        "options":  [
                        "Use Debit Note for purchase return entry",
                        "Open Receipt voucher and enter received amount",
                        "Use Receipt voucher with debtor ledger",
                        "Open GST reports from Display menu"
                    ],
        "answer":  0
    },
    {
        "q":  "Which option is right for record purchase return?",
        "source":  "Purchase",
        "options":  [
                        "Select company from company list and open it",
                        "Use Debit Note for purchase return entry",
                        "Add discount ledger or field in sales voucher",
                        "Use Journal voucher for adjustment entry"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct statement about record purchase return.",
        "source":  "Purchase",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Sales voucher and enter customer bill",
                        "Use Debit Note for purchase return entry",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  2
    },
    {
        "q":  "What is the best way to record purchase return?",
        "source":  "Purchase",
        "options":  [
                        "Select company from company list and open it",
                        "Open GST reports from Display menu",
                        "Use Contra voucher for cash and bank transfer",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical exam, how do you record purchase return?",
        "source":  "Purchase",
        "options":  [
                        "Use Debit Note for purchase return entry",
                        "Add discount ledger or field in sales voucher",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  0
    },
    {
        "q":  "Pick the correct answer for record purchase return.",
        "source":  "Purchase",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Use Debit Note for purchase return entry",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Sales voucher and enter customer bill"
                    ],
        "answer":  1
    },
    {
        "q":  "Which step is correct to record purchase return?",
        "source":  "Purchase",
        "options":  [
                        "Create ledger under Sundry Creditors group",
                        "Use Round Off ledger to adjust final amount",
                        "Open GST reports from Display menu",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  3
    },
    {
        "q":  "Identify the correct process to record purchase return.",
        "source":  "Purchase",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Use Credit Note for sales return entry",
                        "Create ledger under Sundry Debtors group",
                        "Use Debit Note for purchase return entry"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to record purchase return.",
        "source":  "Purchase",
        "options":  [
                        "Open Receipt voucher and enter received amount",
                        "Use Payment voucher with expense ledger",
                        "Use Debit Note for purchase return entry",
                        "Open GST reports from Display menu"
                    ],
        "answer":  2
    },
    {
        "q":  "Which of the following is the correct way to record sales return?",
        "source":  "Sales",
        "options":  [
                        "Use Payment voucher with expense ledger",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Credit Note for sales return entry",
                        "Select company from company list and open it"
                    ],
        "answer":  2
    },
    {
        "q":  "Select the correct method to record sales return.",
        "source":  "Sales",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Use Receipt voucher with debtor ledger",
                        "Use Credit Note for sales return entry",
                        "Use Group creation under Accounts Info"
                    ],
        "answer":  2
    },
    {
        "q":  "Which option is right for record sales return?",
        "source":  "Sales",
        "options":  [
                        "Select company from company list and open it",
                        "Use Payroll vouchers to calculate and post salary",
                        "Use Journal voucher for adjustment entry",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  3
    },
    {
        "q":  "Choose the correct statement about record sales return.",
        "source":  "Sales",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Add discount ledger or field in sales voucher",
                        "Use Debit Note for purchase return entry",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  3
    },
    {
        "q":  "What is the best way to record sales return?",
        "source":  "Sales",
        "options":  [
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Debit Note for purchase return entry",
                        "Select company from company list and open it",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  3
    },
    {
        "q":  "In practical exam, how do you record sales return?",
        "source":  "Sales",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Use Journal voucher for adjustment entry",
                        "Use Credit Note for sales return entry",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  2
    },
    {
        "q":  "Pick the correct answer for record sales return.",
        "source":  "Sales",
        "options":  [
                        "Use Credit Note for sales return entry",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Payment voucher with expense ledger",
                        "Open Receipt voucher and enter received amount"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to record sales return?",
        "source":  "Sales",
        "options":  [
                        "Use Journal voucher for adjustment entry",
                        "Use Credit Note for sales return entry",
                        "Go to Accounts Info and create ledger",
                        "Use Round Off ledger to adjust final amount"
                    ],
        "answer":  1
    },
    {
        "q":  "Identify the correct process to record sales return.",
        "source":  "Sales",
        "options":  [
                        "Use Contra voucher for cash and bank transfer",
                        "Use Journal voucher for adjustment entry",
                        "Open Payment voucher and enter payment details",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to record sales return.",
        "source":  "Sales",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Add discount ledger or field in sales voucher",
                        "Create ledger under Sundry Creditors group",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  3
    },
    {
        "q":  "Which of the following is the correct way to check GST report?",
        "source":  "GST",
        "options":  [
                        "Use Debit Note for purchase return entry",
                        "Create ledger under Sundry Debtors group",
                        "Use Round Off ledger to adjust final amount",
                        "Open GST reports from Display menu"
                    ],
        "answer":  3
    },
    {
        "q":  "Select the correct method to check GST report.",
        "source":  "GST",
        "options":  [
                        "Use Credit Note for sales return entry",
                        "Use Purchase voucher and enter supplier bill",
                        "Use Sales voucher and enter customer bill",
                        "Open GST reports from Display menu"
                    ],
        "answer":  3
    },
    {
        "q":  "Which option is right for check GST report?",
        "source":  "GST",
        "options":  [
                        "Use Round Off ledger to adjust final amount",
                        "Open GST reports from Display menu",
                        "Use Credit Note for sales return entry",
                        "Use Contra voucher for cash and bank transfer"
                    ],
        "answer":  1
    },
    {
        "q":  "Choose the correct statement about check GST report.",
        "source":  "GST",
        "options":  [
                        "Open Payment voucher and enter payment details",
                        "Open GST reports from Display menu",
                        "Use Purchase voucher and enter supplier bill",
                        "Create ledger under Sundry Creditors group"
                    ],
        "answer":  1
    },
    {
        "q":  "What is the best way to check GST report?",
        "source":  "GST",
        "options":  [
                        "Open GST reports from Display menu",
                        "Add discount ledger or field in sales voucher",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Select company from company list and open it"
                    ],
        "answer":  0
    },
    {
        "q":  "In practical exam, how do you check GST report?",
        "source":  "GST",
        "options":  [
                        "Create ledger under Sundry Debtors group",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Open Payment voucher and enter payment details",
                        "Open GST reports from Display menu"
                    ],
        "answer":  3
    },
    {
        "q":  "Pick the correct answer for check GST report.",
        "source":  "GST",
        "options":  [
                        "Open GST reports from Display menu",
                        "Select GST enabled item and tax ledgers in voucher",
                        "Use Round Off ledger to adjust final amount",
                        "Use Group creation under Accounts Info"
                    ],
        "answer":  0
    },
    {
        "q":  "Which step is correct to check GST report?",
        "source":  "GST",
        "options":  [
                        "Go to Accounts Info and create ledger",
                        "Use Receipt voucher with debtor ledger",
                        "Open GST reports from Display menu",
                        "Use Credit Note for sales return entry"
                    ],
        "answer":  2
    },
    {
        "q":  "Identify the correct process to check GST report.",
        "source":  "GST",
        "options":  [
                        "Select company from company list and open it",
                        "Use Purchase voucher and enter supplier bill",
                        "Add discount ledger or field in sales voucher",
                        "Open GST reports from Display menu"
                    ],
        "answer":  3
    },
    {
        "q":  "From the given options, select how to check GST report.",
        "source":  "GST",
        "options":  [
                        "Use Group creation under Accounts Info",
                        "Go to Accounts Info and create ledger",
                        "Use Debit Note for purchase return entry",
                        "Open GST reports from Display menu"
                    ],
        "answer":  3
    }
];

  window.IGCIM_QUESTION_BANKS = window.IGCIM_QUESTION_BANKS || {};
  window.IGCIM_QUESTION_BANKS.TALLY = tallyQuestions;
})();

