package com.example.decrptdemo.files.v3;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

public class CCC {
    public static void main(String[] args) throws FileNotFoundException, ScriptException, NoSuchMethodException, UnsupportedEncodingException {
        String ret =AES_Encrypt("{\"header\":{\"uuid\":\"lsox7ur9xpt0201yxxf69pmxh7j57s101iic\",\"platformCode\":\"h5mobile\",\"appVersion\":\"4.0.2\",\"platformVersion\":\"4.0.2\",\"userID\":\"\",\"userType\":1,\"cmdName\":\"h5_itou\",\"cmdId\":0,\"token\":\"\"},\"body\":{\"matchId\":\"1957597\",\"lotteryId\":10}}");

        System.out.println(ret);
        ret = AES_Decrypt(ret);
        System.out.println(ret);
    }

    public static String AES_Encrypt(String data) throws FileNotFoundException, ScriptException, NoSuchMethodException {
        ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
        ScriptEngine jse = scriptEngineManager.getEngineByName("nashorn");
        jse.eval(new FileReader("./src/yyyy.js"));
        Invocable runner = (Invocable) jse;
        Object result = runner.invokeFunction("AES_Encrypt", data);
        System.out.println();
        return result.toString();
    }

    public static String AES_Decrypt(String data) throws FileNotFoundException, ScriptException, NoSuchMethodException, UnsupportedEncodingException {
        ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
        ScriptEngine jse = scriptEngineManager.getEngineByName("nashorn");
        jse.eval(new FileReader("./src/yyyy.js"));
        Invocable runner = (Invocable) jse;
        Object result = runner.invokeFunction("AES_Decrypt", data);
        System.out.println();

        return URLDecoder.decode(result.toString(), "utf-8");

    }

}
























