describe("Bugsense::Cache failed reports", function(){
  it("should cache a failed report", function(){
    Bugsense.Cache._queue = [];
    expect(Bugsense.Cache._queue.length).toEqual(0);
    Bugsense.Cache.save({"client":{"name":"bugsense-js","version":"1.1"},"request":{},"exception":{"message":"message","where":":","klass":"message","backtrace":"message","breadcrumbs":["after_clearing"]},"application_environment":{"phone":"MacIntel","appver":"unknown","appname":"unknown","osver":"Intel Mac OS X 10.8","connection_type":"unknown","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0","cordova":"unknown","device_name":"unknown","log_data":{}}});
    expect(Bugsense.Cache._queue.length).toEqual(1);
  });
  it("should save the cached report in the localStorage", function(){
    expect(localStorage.getItem('bugsense_cache')).toBe('[{"client":{"name":"bugsense-js","version":"1.1"},"request":{},"exception":{"message":"message","where":":","klass":"message","backtrace":"message","breadcrumbs":["after_clearing"]},"application_environment":{"phone":"MacIntel","appver":"unknown","appname":"unknown","osver":"Intel Mac OS X 10.8","connection_type":"unknown","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0","cordova":"unknown","device_name":"unknown","log_data":{}}}]');
  });
  it("should update cache when an additional report is getting cached", function(){
    Bugsense.Cache.save({"client":{"name":"bugsense-js","version":"1.1"},"request":{},"exception":{"message":"message","where":":","klass":"message","backtrace":"message","breadcrumbs":["after_clearing"]},"application_environment":{"phone":"MacIntel","appver":"unknown","appname":"unknown","osver":"Intel Mac OS X 10.8","connection_type":"unknown","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0","cordova":"unknown","device_name":"unknown","log_data":{}}});
    expect(Bugsense.Cache._queue.length).toEqual(2);
    expect(localStorage.getItem('bugsense_cache')).toBe('[{"client":{"name":"bugsense-js","version":"1.1"},"request":{},"exception":{"message":"message","where":":","klass":"message","backtrace":"message","breadcrumbs":["after_clearing"]},"application_environment":{"phone":"MacIntel","appver":"unknown","appname":"unknown","osver":"Intel Mac OS X 10.8","connection_type":"unknown","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0","cordova":"unknown","device_name":"unknown","log_data":{}}},{"client":{"name":"bugsense-js","version":"1.1"},"request":{},"exception":{"message":"message","where":":","klass":"message","backtrace":"message","breadcrumbs":["after_clearing"]},"application_environment":{"phone":"MacIntel","appver":"unknown","appname":"unknown","osver":"Intel Mac OS X 10.8","connection_type":"unknown","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0","cordova":"unknown","device_name":"unknown","log_data":{}}}]');
  });
});
