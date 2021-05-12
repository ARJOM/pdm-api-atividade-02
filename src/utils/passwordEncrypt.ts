
import md5 from 'md5';

 export default class PasswordEncrypts{
    
    static passwordEncrypt(password: String){
        return md5(password.toString())
    }
    
};