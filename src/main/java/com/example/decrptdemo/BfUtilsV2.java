package com.example.decrptdemo;


import com.alibaba.fastjson.JSONObject;
import com.example.decrptdemo.dto.FormatJddParams;
import jdk.nashorn.api.scripting.ScriptObjectMirror;
import lombok.SneakyThrows;

import javax.script.*;
import java.io.FileReader;

public class BfUtilsV2 {
	public static void main(String[] args) throws Exception {

		getMatchBfEncodedReq("1960885");
	}

	@SneakyThrows
	public static String getMatchBfEncodedReq(String matchId) {

		ScriptEngine engine = new ScriptEngineManager().getEngineByName("js");
		//建立上下文变量
		Bindings bind = engine.createBindings();
		bind.put("n", 2);
		// 绑定上下文，作用域是当前引擎范围
		engine.setBindings(bind, ScriptContext.ENGINE_SCOPE);


		engine.eval(new FileReader("E:\\IDEA\\earn\\football\\decrptDemo\\src\\main\\java\\com\\example\\decrptdemo\\files\\fileV2\\container.js"));
		engine.eval(new FileReader("E:\\IDEA\\earn\\football\\decrptDemo\\src\\main\\java\\com\\example\\decrptdemo\\files\\fileV2\\crypto-js-60ab5dbd46.js"));
		engine.eval(new FileReader("E:\\IDEA\\earn\\football\\decrptDemo\\src\\main\\java\\com\\example\\decrptdemo\\files\\fileV2\\service-dca3ad1432.js"));

		//	en\gine.eval("function add(a,b){return a+b;}");
		// 是否可调用方法
		Invocable engineInvocable = (Invocable) engine;
		//执行js函数
		Object formatJddParams = engineInvocable.invokeFunction("formatJddParams", new FormatJddParams());
		String encRequestParam = ((ScriptObjectMirror) formatJddParams).get("data").toString().split("=")[1];
		System.out.println(encRequestParam);
		String replace = encRequestParam.toString().replaceAll("%2B", "+");
		System.out.println("运算结果为：" + replace);
		return replace;


	}
}
