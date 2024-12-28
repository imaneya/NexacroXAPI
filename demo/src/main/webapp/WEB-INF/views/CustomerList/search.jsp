<!-- 1.Designating a Java library -->
<%@ page import="java.io.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>

<!-- 2. Defining a MIME type -->
<%@ page contentType="text/xml; charset=UTF-8" %>
<%
/** 3. Creating a basic object of Nexacro **/
PlatformData pdata = new PlatformData();

/** 5.1 Processing ErrorCode and ErrorMsg **/
int nErrorCode = 0;
String strErrorMsg = "START";

try {
    /** 4. Processing data : Loading data from the file: loading data from the file **/
    /** 4.1 Loading data from the file **/
    String sourceFilename = "./saveFile.bin";
    InputStream source = new FileInputStream(sourceFilename);

    PlatformRequest req = new PlatformRequest(source, 
        PlatformType.CONTENT_TYPE_BINARY);
    req.receiveData();
    source.close();

    /** 4.2 Copying the loaded data to the dataset **/
    pdata = req.getData();

    /** 5.2 Setting ErrorCode and ErrorMsg for success **/
    nErrorCode = 0;
    strErrorMsg = "SUCC";

} catch (Throwable th) {
    /** 5.3 Setting ErrorCode and ErrorMsg for failure **/
    nErrorCode = -1;
    strErrorMsg = th.getMessage();
}

/** 5.4 Saving ErrorCode and ErrorMsg to send them to the client **/
VariableList varList = pdata.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg", strErrorMsg);

/** 6. Sending result data to the client **/
HttpPlatformResponse res = new HttpPlatformResponse(response, 
    PlatformType.CONTENT_TYPE_XML,"UTF-8");
res.setData(pdata);
res.sendData();
%>