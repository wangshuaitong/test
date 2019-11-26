 class Program{
       static void Main(string[] args)
          {
              Console.WriteLine($"头部已执行，当前主线程Id为：{Thread.CurrentThread.ManagedThreadId}");
              string result = SayHiAsync("jack").Result;
              Console.WriteLine(result);
              Console.WriteLine($"尾部已执行，当前主线程Id为：{Thread.CurrentThread.ManagedThreadId}");
              Console.ReadKey();
         }
         static Task<string> SayHiAsync(string name)
         {
             return Task.Run<string>(() => { return SayHi(name); });
         }
         static string SayHi(string name)
         {
             Task.Delay(2000).Wait();//异步等待2s
             Console.WriteLine($"SayHi执行，当前线程Id为：{Thread.CurrentThread.ManagedThreadId}");
             return $"Hello,{name}";
         }
     }