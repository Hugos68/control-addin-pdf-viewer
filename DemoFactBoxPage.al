page 50101 "Hugos Customers"
{
    ApplicationArea = All;
    Caption = 'Hugos Customers';
    PageType = Card;
    SourceTable = Customer;

    layout
    {
        area(Content)
        {
            group(General)
            {
                Caption = 'General';

                field("No."; Rec."No.")
                {
                }
                field(Name; Rec.Name)
                {
                }
            }
        }
        area(FactBoxes)
        {
            part(ADSDIPDFDocument; "Demo FactBox Page")
            {
                ApplicationArea = All;
            }
        }
    }
}
