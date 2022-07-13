---
title: 'TrueNAS Disk Benchmarks'
date: 'July 13, 2022'
excerpt: 'Results of a disk benchmark test with different ZFS pool types'
tags: ['ZFS', 'TrueNAS', 'RAIDz', 'Proxmox']
cover_image: '/images/posts/truenas_512k.png'
---

# TrueNAS Disk Benchmarks

### Backstory

Recently I bought a NAS server to use for personal photo storage and linux ISOs. I wanted to utilize TrueNAS to easily setup NFS & SMB shares on my network. I didn't really like TrueNAS Scale's GUI for KVM management and Kubernetes. So I decided on Proxmox for my main hypervisor, then passthrough my H310 HBA to a TrueNAS Core VM.

The server I currently have Proxmox has the ZFS pool directly on Proxmox. It's 4 x 1TB striped mirror pool with a 256GB NVME SSD as ZIL & L2Arc caches. It works great for VM storage, and I'm very happy with the performance (will include numbers below). Since my NAS pool was primarily for bulk storage, I settled on RAIDz2 for a balance of redundancy and capacity, and a SLC SAS SSD for the ZIL write cache. SLCs are expensive, but have very high endurance which is good for write cache devices.

So I exported a NFS share to Proxmox and started a benchmark with LXC containers. I was primarily testing if the data travelling to the TrueNAS VM would infact utilize the network link speed, or bus speed of the system since the NFS server resided on the same physical machine (which it does seem to use bus speed). Disk speeds were a bit disppointing since I was getting near max PCIe speeds from my NVME drive, but hit about 1/5th of the maximum SAS2 6.0Gbps speeds on my SLC SSD (only 131 MB/s).

I removed the SSD log cache device, and improved my 64k and 512k block speeds significantly. So while I was at it, I decided to benchmark different scenerios and ZFS pool types (RAIDZ, RAIDZ2 and striped mirror) with and without my SAS SSD set as write cache.

### TLDR Just Get to The Data

Here are the benchmark results for different scenerios:

![4k Block Size](/images/posts/truenas_4k.png)

![64k Block Size](/images/posts/truenas_64k.png)

![512k Block Size](/images/posts/truenas_512k.png)

![1m Block Size](/images/posts/truenas_1m.png)
