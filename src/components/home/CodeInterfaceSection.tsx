"use client";

import { Terminal, Server, Shield, Database, Cloud } from "lucide-react";

export default function CodeInterfaceSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Matrix/Grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-mono mb-6 shadow-[0_0_15px_rgba(0,255,65,0.2)]">
            <Terminal size={16} /> ~/quantum_vortexa/core
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Code-Driven Infrastructure
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We engineer secure, scalable, and intelligent architectures tailored for modern enterprise environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Main Code Editor */}
          <div className="lg:col-span-8 bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(0,255,65,0.05)] transition-all hover:border-green-500/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(0,255,65,0.15)]">
            <div className="flex items-center px-4 py-3 bg-[#0d1117] border-b border-[#30363d]">
              <div className="flex gap-2 mr-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex gap-1">
                <div className="px-4 py-1 text-xs text-gray-300 bg-[#161b22] border-t-2 border-green-500 rounded-t-md font-mono">
                  config.ts
                </div>
                <div className="px-4 py-1 text-xs text-gray-500 cursor-pointer hover:text-gray-300 font-mono transition-colors">
                  architecture.yml
                </div>
              </div>
            </div>
            <div className="p-4 flex text-sm font-mono leading-relaxed overflow-x-auto">
              <div className="text-gray-600 select-none pr-4 border-r border-[#30363d] text-right min-w-[2.5rem]">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13
              </div>
              <div className="pl-4 text-gray-300 whitespace-nowrap">
                <span className="text-pink-400">const</span> <span className="text-blue-400">quantumVortexa</span> <span className="text-pink-400">=</span> {'{'}
                <br/>
                {'  '}name: <span className="text-green-300">"Quantum Vortexa FZE LLC"</span>,
                <br/>
                {'  '}headquarters: <span className="text-green-300">"Ajman, UAE"</span>,
                <br/>
                {'  '}compliance: [<span className="text-green-300">"ISO 27001"</span>, <span className="text-green-300">"UAE PDPL"</span>, <span className="text-green-300">"SOC 2"</span>],
                <br/>
                {'  '}coreServices: {'{'}
                <br/>
                {'    '}security: <span className="text-green-300">"Zero-Trust Architecture"</span>,
                <br/>
                {'    '}intelligence: <span className="text-green-300">"Enterprise AI & ML"</span>,
                <br/>
                {'    '}infrastructure: <span className="text-green-300">"Cloud & SAP Solutions"</span>
                <br/>
                {'  }'},
                <br/>
                {'  '}<span className="text-purple-400">init</span>() {'{'}
                <br/>
                {'    '}<span className="text-pink-400">return</span> <span className="text-green-300">"Secure, Scalable, Intelligent."</span>;
                <br/>
                {'  }'}
                <br/>
                {'}'};
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 group hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 group-hover:rotate-[-5deg] transition-all">
                <Shield size={24} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">99.99%</h4>
              <p className="text-xs text-gray-500 font-mono">system_uptime_sla</p>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 group hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 group-hover:rotate-[5deg] transition-all">
                <Server size={24} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">24/7</h4>
              <p className="text-xs text-gray-500 font-mono">active_soc_monitoring</p>
            </div>
          </div>
        </div>
        
        {/* Secondary YML / Terraform Files */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden group hover:border-pink-500/50 hover:shadow-[0_10px_40px_rgba(236,72,153,0.1)] transition-all relative">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Database size={64} />
            </div>
            <div className="flex items-center px-4 py-3 bg-[#0d1117] border-b border-[#30363d]">
              <Database size={16} className="text-pink-400 mr-2" />
              <span className="text-sm font-mono text-gray-300">data-pipeline.yml</span>
            </div>
            <div className="p-6 font-mono text-sm text-gray-300 leading-relaxed overflow-x-auto">
              <span className="text-pink-400">apiVersion</span>: v1<br/>
              <span className="text-pink-400">kind</span>: AI_Integration<br/>
              <span className="text-pink-400">metadata</span>:<br/>
              {'  '}name: <span className="text-green-300">"enterprise-llm"</span><br/>
              <span className="text-pink-400">spec</span>:<br/>
              {'  '}model: <span className="text-green-300">"GPT-4 Enterprise"</span><br/>
              {'  '}privacy: <span className="text-green-300">"On-Premise Isolated"</span><br/>
              {'  '}throughput: <span className="text-green-300">"10k req/sec"</span>
            </div>
          </div>
          
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden group hover:border-blue-500/50 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all relative">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cloud size={64} />
            </div>
            <div className="flex items-center px-4 py-3 bg-[#0d1117] border-b border-[#30363d]">
              <Cloud size={16} className="text-blue-400 mr-2" />
              <span className="text-sm font-mono text-gray-300">cloud-arch.tf</span>
            </div>
            <div className="p-6 font-mono text-sm text-gray-300 leading-relaxed overflow-x-auto">
              <span className="text-blue-400">resource</span> <span className="text-green-300">"aws_vpc"</span> <span className="text-green-300">"quantum_secure"</span> {'{'}<br/>
              {'  '}cidr_block = <span className="text-green-300">"10.0.0.0/16"</span><br/>
              {'  '}enable_dns_hostnames = <span className="text-purple-400">true</span><br/>
              {'  '}tags = {'{'}<br/>
              {'    '}Environment = <span className="text-green-300">"Zero-Trust"</span><br/>
              {'  }'}<br/>
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
