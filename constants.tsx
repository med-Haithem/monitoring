export const MONITORING_LINKS = {
  "Cibo Production": {
    "CIBO01-P": [
      {
        title: "CIBO01-P (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=31&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "CIBO01-P (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=952&device=31&height=100.5&width=300",
      },
    ],
    "CIBO02-P": [
      {
        title: "CIBO02-P (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=32&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "CIBO02-P (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=481&device=32&height=100.5&width=300",
      },
    ],
    "CIBO03-P": [
      {
        title: "CIBO03-P (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=33&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "CIBO03-P (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=481&device=33&height=100.5&width=300",
      },
    ],
    "CIBO04-P": [
      {
        title: "CIBO04-P (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=44&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "CIBO04-P (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=481&device=44&height=100.5&width=300",
      },
    ],
    "CIBO11-P": [
      {
        Title: "CIBO11-P (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=34&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        Title: "CIBO11-P (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=952&device=34&height=100.5&width=300",
      },
    ],
    "CIBO12-P": [
      {
        title: "CIBO12-P (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=35&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "CIBO12-P (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=481&device=35&height=100.5&width=300",
      },
    ],
    "CIBO13-P": [
      {
        title: "CIBO13-P (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=37&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "CIBO13-P (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=481&device=37&height=100.5&width=300",
      },
    ],
    "CIBO14-P": [
      {
        title: "CIBO14-P (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=36&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "CIBO14-P (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=481&device=36&height=100.5&width=300",
      },
    ],
    "pg02-p": [
      {
        title: "pg02-p",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=68&type=device_availability&duration=86400&from={0}&to={1}&&height=100.5&width=300",
      },
    ],
    "pg12-p": [
      {
        title: "pg12-p",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=71&type=device_availability&duration=86400&from={0}&to={1}&&height=100.5&width=300",
      },
    ],
    "mongo01-p": [
      {
        title: "mongo01-p",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=24&type=device_availability&duration=86400&from={0}&to={1}&&height=100.5&width=300",
      },
    ],
    "mongo01-p-replic1": [
      {
        title: "mongo01-p-replic1",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=23&type=device_availability&duration=86400&from={0}&to={1}&&height=100.5&width=300",
      },
    ],
    "mongo01-p-replic2": [
      {
        title: "mongo01-p-replic2",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=23&type=device_availability&duration=86400&from={0}&to={1}&&height=100.5&width=300",
      },
    ],
    "mongo11-p": [
      {
        title: "mongo11-p",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=39&type=device_availability&duration=86400&from={0}&to={1}&height=100.5&width=300",
      },
    ],
    "mongo11-p-replic1": [
      {
        title: "mongo11-p-replic1",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=40&type=device_availability&duration=86400&from={0}&to={1}&&height=100.5&width=300",
      },
    ],
    "mongo11-p-replic2": [
      {
        title: "mongo11-p-replic2",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=41&type=device_availability&duration=86400&from={0}&to={1}&&height=100.5&width=300",
      },
    ],
  },
  "Classic Shop Production": {
    "Shop01-p": [
      {
        title: "Shop01-p (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=1&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "Shop01-p (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=952&device=1&height=100.5&width=300",
      },
    ],
    "Shop02-p": [
      {
        title: "Shop02-p (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=2&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "Shop02-p (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=481&device=2&height=100.5&width=300",
      },
    ],
    "Shop03-p": [
      {
        title: "Shop03-p (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=13&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "Shop03-p (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=481&device=13&height=100.5&width=300",
      },
    ],
    "Shop04-p": [
      {
        title: "Shop04-p (Memory Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=14&type=device_mempool&from={0}&to={1}&height=100.5&width=300",
      },
      {
        title: "Shop04-p (Processor Usage)",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?to={1}&type=device_processor&from={0}&lazy_w=481&device=14&height=100.5&width=300",
      },
    ],
    "pg01-p": [
      {
        title: "pg01-p",
        url: "https://librenms.vrr-cibo.mentz-services.net/graph.php?device=66&type=device_availability&duration=86400&from={0}&to={1}&&height=100.5&width=300",
      },
    ],
  },
};
