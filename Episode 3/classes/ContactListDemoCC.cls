public class ContactListDemoCC {

    @AuraEnabled
    public static List<Contact> fetchContactList(Id accountId){
        List<Contact> contacts =
                [SELECT Id, Name, Phone, Email FROM Contact where AccountId=:accountId];
        return contacts;
    }
    
    @AuraEnabled
    public static List<Contact> filteredContactList(Id accountId, String key){
        String query='SELECT Id, Name, Phone, Email FROM Contact where AccountId=\''+accountId+'\' and Name like \'%'+key+'%\' ';
        List<Contact> contacts = Database.query(query);
        return contacts;
    }
}