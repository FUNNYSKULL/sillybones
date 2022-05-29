local Injectioner = Instance.new("ScreenGui")
local Login = Instance.new("Frame")
local key = Instance.new("TextBox")
local UICorner = Instance.new("UICorner")
local user = Instance.new("TextLabel")
local loginButton = Instance.new("TextButton")
local UICorner_2 = Instance.new("UICorner")
local Frame = Instance.new("Frame")
local enable = Instance.new("TextButton")
local UICorner_3 = Instance.new("UICorner")
local TextLabel = Instance.new("TextLabel")
local TextLabel_2 = Instance.new("TextLabel")
local TextLabel_3 = Instance.new("TextLabel")
local ImageLabel = Instance.new("ImageLabel")
local logo = Instance.new("ImageLabel")
local inject = Instance.new("TextLabel")
local Open = Instance.new("Frame")
local UICorner_4 = Instance.new("UICorner")
local ImageLabel_2 = Instance.new("ImageLabel")
local TextButton = Instance.new("TextButton")
local MainFrame = Instance.new("Frame")
local scriptlist = Instance.new("Frame")
local SearchBar = Instance.new("TextBox")
local UICorner_5 = Instance.new("UICorner")
local Items = Instance.new("ScrollingFrame")
local UIListLayout = Instance.new("UIListLayout")
local CreepyCrawlerR6Required = Instance.new("TextButton")
local TextLabel_4 = Instance.new("TextLabel")
local ImageButton = Instance.new("ImageButton")
local UICorner_6 = Instance.new("UICorner")
local FeetR6Required = Instance.new("TextButton")
local TextLabel_5 = Instance.new("TextLabel")
local ImageButton_2 = Instance.new("ImageButton")
local UICorner_7 = Instance.new("UICorner")
local AmongusR6Required = Instance.new("TextButton")
local TextLabel_6 = Instance.new("TextLabel")
local ImageButton_3 = Instance.new("ImageButton")
local UICorner_8 = Instance.new("UICorner")
local CursedAnimsR6Required = Instance.new("TextButton")
local TextLabel_7 = Instance.new("TextLabel")
local ImageButton_4 = Instance.new("ImageButton")
local UICorner_9 = Instance.new("UICorner")
local CrazyDanceR15Required = Instance.new("TextButton")
local TextLabel_8 = Instance.new("TextLabel")
local ImageButton_5 = Instance.new("ImageButton")
local UICorner_10 = Instance.new("UICorner")
local SmallR15Required = Instance.new("TextButton")
local TextLabel_9 = Instance.new("TextLabel")
local ImageButton_6 = Instance.new("ImageButton")
local UICorner_11 = Instance.new("UICorner")
local Border = Instance.new("Frame")
local UICorner_12 = Instance.new("UICorner")
local TextLabel_10 = Instance.new("TextLabel")
local list = Instance.new("Frame")
local Settings_button = Instance.new("TextButton")
local UICorner_13 = Instance.new("UICorner")
local ImageLabel_3 = Instance.new("ImageLabel")
local TextLabel_11 = Instance.new("TextLabel")
local UICorner_14 = Instance.new("UICorner")
local ImageLabel_4 = Instance.new("ImageLabel")
local Script_Button = Instance.new("TextButton")
local UICorner_15 = Instance.new("UICorner")
local ImageLabel_5 = Instance.new("ImageLabel")
local Home_button = Instance.new("TextButton")
local UICorner_16 = Instance.new("UICorner")
local ImageLabel_6 = Instance.new("ImageLabel")
local misc_button = Instance.new("TextButton")
local UICorner_17 = Instance.new("UICorner")
local ImageLabel_7 = Instance.new("ImageLabel")
local bar = Instance.new("Frame")
local ImageLabel_8 = Instance.new("ImageLabel")
local TextLabel_12 = Instance.new("TextLabel")
local TextLabel_13 = Instance.new("TextLabel")
local TextButton_2 = Instance.new("TextButton")
local Home = Instance.new("Frame")
local ImageLabel_9 = Instance.new("ImageLabel")
local credit = Instance.new("TextLabel")
local info = Instance.new("TextLabel")
local welcome = Instance.new("TextLabel")
local Funnytest = Instance.new("TextLabel")
local Settings = Instance.new("Frame")
local R15toR6 = Instance.new("TextButton")
local TextLabel_14 = Instance.new("TextLabel")
local ImageButton_7 = Instance.new("ImageButton")
local UICorner_18 = Instance.new("UICorner")
local Netless = Instance.new("TextButton")
local TextLabel_15 = Instance.new("TextLabel")
local ImageButton_8 = Instance.new("ImageButton")
local UICorner_19 = Instance.new("UICorner")
local miscellaneous = Instance.new("Frame")
local SearchBar_2 = Instance.new("TextBox")
local UICorner_20 = Instance.new("UICorner")
local Items_2 = Instance.new("ScrollingFrame")
local InfiniteYieldFE = Instance.new("TextButton")
local TextLabel_16 = Instance.new("TextLabel")
local ImageButton_9 = Instance.new("ImageButton")
local UICorner_21 = Instance.new("UICorner")
local UIListLayout_2 = Instance.new("UIListLayout")
local Border_2 = Instance.new("Frame")
local UICorner_22 = Instance.new("UICorner")

--Properties:

Injectioner.Name = "Injectioner"
Injectioner.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")
Injectioner.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
Injectioner.ResetOnSpawn = false

Login.Name = "Login"
Login.Parent = Injectioner
Login.AnchorPoint = Vector2.new(0.5, 0.5)
Login.BackgroundColor3 = Color3.fromRGB(33, 33, 33)
Login.BorderColor3 = Color3.fromRGB(227, 0, 0)
Login.Position = UDim2.new(0.5, 0, 2, 0)
Login.Size = UDim2.new(0, 255, 0, 334)
Login.Visible = false

key.Name = "key"
key.Parent = Login
key.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
key.BorderSizePixel = 0
key.Position = UDim2.new(0.101960786, 0, 0.53098166, 0)
key.Size = UDim2.new(0, 200, 0, 22)
key.ZIndex = 3
key.Font = Enum.Font.TitilliumWeb
key.Text = ""
key.TextColor3 = Color3.fromRGB(182, 0, 0)
key.TextSize = 16.000
key.TextXAlignment = Enum.TextXAlignment.Left

UICorner.Parent = key

user.Name = "user"
user.Parent = key
user.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
user.BackgroundTransparency = 2.000
user.Position = UDim2.new(0.0299999993, 0, -0.754321039, 0)
user.Size = UDim2.new(0, 85, 0, 15)
user.Font = Enum.Font.TitilliumWeb
user.Text = "Whitelist key:"
user.TextColor3 = Color3.fromRGB(159, 159, 159)
user.TextSize = 14.000
user.TextXAlignment = Enum.TextXAlignment.Left

loginButton.Name = "loginButton"
loginButton.Parent = Login
loginButton.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
loginButton.BorderSizePixel = 0
loginButton.Position = UDim2.new(0.286274523, 0, 0.631963074, 0)
loginButton.Size = UDim2.new(0, 107, 0, 22)
loginButton.ZIndex = 3
loginButton.Font = Enum.Font.TitilliumWeb
loginButton.Text = "Login"
loginButton.TextColor3 = Color3.fromRGB(159, 159, 159)
loginButton.TextSize = 16.000

UICorner_2.Parent = loginButton

Frame.Parent = Login
Frame.BackgroundColor3 = Color3.fromRGB(24, 24, 24)
Frame.BorderSizePixel = 0
Frame.Position = UDim2.new(0, 0, 0.910179615, 0)
Frame.Size = UDim2.new(0, 255, 0, 30)

enable.Name = "enable"
enable.Parent = Login
enable.BackgroundColor3 = Color3.fromRGB(194, 0, 0)
enable.Position = UDim2.new(0.913725495, 0, 0.931137741, 0)
enable.Size = UDim2.new(0, 15, 0, 15)
enable.Font = Enum.Font.SourceSans
enable.Text = ""
enable.TextColor3 = Color3.fromRGB(0, 0, 0)
enable.TextSize = 14.000

UICorner_3.CornerRadius = UDim.new(0, 100)
UICorner_3.Parent = enable

TextLabel.Parent = enable
TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel.BackgroundTransparency = 3.000
TextLabel.Position = UDim2.new(-6.43235254, 0, 0.0235595703, 0)
TextLabel.Size = UDim2.new(0, 90, 0, 15)
TextLabel.Font = Enum.Font.TitilliumWeb
TextLabel.Text = "Hide Whitelist key:"
TextLabel.TextColor3 = Color3.fromRGB(159, 159, 159)
TextLabel.TextSize = 14.000
TextLabel.TextXAlignment = Enum.TextXAlignment.Right

TextLabel_2.Parent = Login
TextLabel_2.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_2.BackgroundTransparency = 2.000
TextLabel_2.Position = UDim2.new(0.00318264961, 0, 0.30118531, 0)
TextLabel_2.Size = UDim2.new(0, 256, 0, 25)
TextLabel_2.ZIndex = 3
TextLabel_2.Font = Enum.Font.TitilliumWeb
TextLabel_2.Text = "Injectioner"
TextLabel_2.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_2.TextSize = 25.000

TextLabel_3.Parent = Login
TextLabel_3.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_3.BackgroundTransparency = 2.000
TextLabel_3.Position = UDim2.new(-0.00845971238, 0, 0.376035601, 0)
TextLabel_3.Size = UDim2.new(0, 257, 0, 12)
TextLabel_3.Font = Enum.Font.TitilliumWeb
TextLabel_3.Text = "Made by Marii & Void"
TextLabel_3.TextColor3 = Color3.fromRGB(161, 161, 161)
TextLabel_3.TextSize = 18.000
TextLabel_3.TextWrapped = true

ImageLabel.Parent = Login
ImageLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ImageLabel.BackgroundTransparency = 2.000
ImageLabel.LayoutOrder = 3
ImageLabel.Position = UDim2.new(0.37536484, 0, 0.0896948054, 0)
ImageLabel.Size = UDim2.new(0, 66, 0, 70)
ImageLabel.ZIndex = 4
ImageLabel.Image = "http://www.roblox.com/asset/?id=9420542917"
ImageLabel.ScaleType = Enum.ScaleType.Fit

logo.Name = "logo"
logo.Parent = Injectioner
logo.Active = true
logo.AnchorPoint = Vector2.new(0.5, 0.5)
logo.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
logo.BackgroundTransparency = 2.000
logo.Position = UDim2.new(0.5, 0, 0.5, 0)
logo.Size = UDim2.new(0, 179, 0, 147)
logo.Image = "http://www.roblox.com/asset/?id=9420542917"
logo.ImageTransparency = 1.000
logo.ScaleType = Enum.ScaleType.Fit

inject.Name = "inject"
inject.Parent = logo
inject.AnchorPoint = Vector2.new(0.5, 0.5)
inject.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
inject.BackgroundTransparency = 2.000
inject.Position = UDim2.new(0.5, 0, 1.10000002, 0)
inject.Size = UDim2.new(0, 179, 0, 25)
inject.ZIndex = 3
inject.Font = Enum.Font.TitilliumWeb
inject.Text = "Injectioner"
inject.TextColor3 = Color3.fromRGB(182, 0, 0)
inject.TextSize = 40.000
inject.TextStrokeTransparency = 0.700
inject.TextTransparency = 1.000

Open.Name = "Open"
Open.Parent = Injectioner
Open.AnchorPoint = Vector2.new(0.5, 0.5)
Open.BackgroundColor3 = Color3.fromRGB(24, 24, 24)
Open.Position = UDim2.new(0.5, 0, 0.0320000015, 0)
Open.Size = UDim2.new(0, 47, 0, 45)
Open.Visible = false

UICorner_4.CornerRadius = UDim.new(0, 12)
UICorner_4.Parent = Open

ImageLabel_2.Parent = Open
ImageLabel_2.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ImageLabel_2.BackgroundTransparency = 2.000
ImageLabel_2.Position = UDim2.new(0, 0, 0.134615406, 0)
ImageLabel_2.Size = UDim2.new(0, 46, 0, 32)
ImageLabel_2.Image = "http://www.roblox.com/asset/?id=9420542917"
ImageLabel_2.ScaleType = Enum.ScaleType.Fit

TextButton.Parent = Open
TextButton.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextButton.BackgroundTransparency = 3.000
TextButton.Size = UDim2.new(0, 47, 0, 45)
TextButton.Font = Enum.Font.SourceSans
TextButton.Text = ""
TextButton.TextColor3 = Color3.fromRGB(0, 0, 0)
TextButton.TextSize = 14.000

MainFrame.Name = "MainFrame"
MainFrame.Parent = Injectioner
MainFrame.AnchorPoint = Vector2.new(0.5, 0.5)
MainFrame.BackgroundColor3 = Color3.fromRGB(33, 33, 33)
MainFrame.BorderColor3 = Color3.fromRGB(227, 0, 0)
MainFrame.Position = UDim2.new(0.5, 0, 2, 0)
MainFrame.Size = UDim2.new(0, 615, 0, 353)
MainFrame.Visible = false

scriptlist.Name = "scriptlist"
scriptlist.Parent = MainFrame
scriptlist.AnchorPoint = Vector2.new(0.5, 0.5)
scriptlist.BackgroundColor3 = Color3.fromRGB(46, 46, 46)
scriptlist.BackgroundTransparency = 3.000
scriptlist.BorderColor3 = Color3.fromRGB(42, 42, 42)
scriptlist.BorderSizePixel = 2
scriptlist.Position = UDim2.new(0.632509828, 0, 0.535410762, 0)
scriptlist.Size = UDim2.new(0.734980404, 0, 0.929178357, 0)
scriptlist.Visible = false

SearchBar.Name = "SearchBar"
SearchBar.Parent = scriptlist
SearchBar.AnchorPoint = Vector2.new(0.5, 0)
SearchBar.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
SearchBar.BorderColor3 = Color3.fromRGB(32, 32, 32)
SearchBar.BorderSizePixel = 0
SearchBar.Position = UDim2.new(0.495575219, 0, 0.0309809186, 0)
SearchBar.Size = UDim2.new(0.949999988, 0, 0.0749830306, 0)
SearchBar.Font = Enum.Font.TitilliumWeb
SearchBar.PlaceholderColor3 = Color3.fromRGB(102, 102, 102)
SearchBar.PlaceholderText = "Search"
SearchBar.Text = ""
SearchBar.TextColor3 = Color3.fromRGB(204, 204, 204)
SearchBar.TextScaled = true
SearchBar.TextSize = 14.000
SearchBar.TextWrapped = true

UICorner_5.Parent = SearchBar

Items.Name = "Items"
Items.Parent = scriptlist
Items.Active = true
Items.AnchorPoint = Vector2.new(0.5, 0)
Items.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Items.BackgroundTransparency = 1.000
Items.BorderSizePixel = 0
Items.Position = UDim2.new(0.495575219, 0, 0.130958438, 0)
Items.Size = UDim2.new(0.949999988, 0, 0.849804342, 5)
Items.ScrollBarThickness = 0

UIListLayout.Parent = Items
UIListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
UIListLayout.Padding = UDim.new(0, 5)

CreepyCrawlerR6Required.Name = "Creepy Crawler [R6 Required]"
CreepyCrawlerR6Required.Parent = Items
CreepyCrawlerR6Required.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
CreepyCrawlerR6Required.BorderSizePixel = 0
CreepyCrawlerR6Required.Position = UDim2.new(0, 0, 0.0143597908, 0)
CreepyCrawlerR6Required.Selectable = false
CreepyCrawlerR6Required.Size = UDim2.new(0, 429, 0, 26)
CreepyCrawlerR6Required.AutoButtonColor = false
CreepyCrawlerR6Required.Font = Enum.Font.TitilliumWeb
CreepyCrawlerR6Required.Text = "Creepy Crawler [R6 Required]"
CreepyCrawlerR6Required.TextColor3 = Color3.fromRGB(255, 255, 255)
CreepyCrawlerR6Required.TextSize = 18.000
CreepyCrawlerR6Required.TextTransparency = 1.000
CreepyCrawlerR6Required.TextWrapped = true

TextLabel_4.Parent = CreepyCrawlerR6Required
TextLabel_4.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_4.BackgroundTransparency = 2.000
TextLabel_4.Position = UDim2.new(0.0139860138, 0, 0, 0)
TextLabel_4.Size = UDim2.new(0, 353, 0, 25)
TextLabel_4.Font = Enum.Font.TitilliumWeb
TextLabel_4.Text = "Creepy Crawler [R6 Required]"
TextLabel_4.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_4.TextSize = 19.000
TextLabel_4.TextXAlignment = Enum.TextXAlignment.Left

ImageButton.Parent = CreepyCrawlerR6Required
ImageButton.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
ImageButton.BackgroundTransparency = 1.000
ImageButton.Position = UDim2.new(0.946386933, 0, 0.115384616, 0)
ImageButton.Rotation = 180.000
ImageButton.Size = UDim2.new(0, 17, 0, 19)
ImageButton.Image = "rbxassetid://929678762"
ImageButton.ImageColor3 = Color3.fromRGB(204, 0, 0)
ImageButton.ScaleType = Enum.ScaleType.Fit

UICorner_6.CornerRadius = UDim.new(0, 10)
UICorner_6.Parent = CreepyCrawlerR6Required

FeetR6Required.Name = "Feet [R6 Required]"
FeetR6Required.Parent = Items
FeetR6Required.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
FeetR6Required.BorderSizePixel = 0
FeetR6Required.Position = UDim2.new(0, 0, 0.0143597908, 0)
FeetR6Required.Selectable = false
FeetR6Required.Size = UDim2.new(0, 429, 0, 26)
FeetR6Required.AutoButtonColor = false
FeetR6Required.Font = Enum.Font.TitilliumWeb
FeetR6Required.Text = "Long Feet [R6 Required]"
FeetR6Required.TextColor3 = Color3.fromRGB(255, 255, 255)
FeetR6Required.TextSize = 18.000
FeetR6Required.TextTransparency = 1.000
FeetR6Required.TextWrapped = true

TextLabel_5.Parent = FeetR6Required
TextLabel_5.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_5.BackgroundTransparency = 2.000
TextLabel_5.Position = UDim2.new(0.0139860138, 0, 0, 0)
TextLabel_5.Size = UDim2.new(0, 353, 0, 25)
TextLabel_5.Font = Enum.Font.TitilliumWeb
TextLabel_5.Text = "Long Feet [R6 Required]"
TextLabel_5.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_5.TextSize = 19.000
TextLabel_5.TextXAlignment = Enum.TextXAlignment.Left

ImageButton_2.Parent = FeetR6Required
ImageButton_2.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
ImageButton_2.BackgroundTransparency = 1.000
ImageButton_2.Position = UDim2.new(0.946386933, 0, 0.115384616, 0)
ImageButton_2.Rotation = 180.000
ImageButton_2.Size = UDim2.new(0, 17, 0, 19)
ImageButton_2.Image = "rbxassetid://929678762"
ImageButton_2.ImageColor3 = Color3.fromRGB(204, 0, 0)
ImageButton_2.ScaleType = Enum.ScaleType.Fit

UICorner_7.CornerRadius = UDim.new(0, 10)
UICorner_7.Parent = FeetR6Required

AmongusR6Required.Name = "Amongus [R6 Required]"
AmongusR6Required.Parent = Items
AmongusR6Required.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
AmongusR6Required.BorderSizePixel = 0
AmongusR6Required.Position = UDim2.new(0, 0, 0.0143597908, 0)
AmongusR6Required.Selectable = false
AmongusR6Required.Size = UDim2.new(0, 429, 0, 26)
AmongusR6Required.AutoButtonColor = false
AmongusR6Required.Font = Enum.Font.TitilliumWeb
AmongusR6Required.Text = "Amongus [R6 Required]"
AmongusR6Required.TextColor3 = Color3.fromRGB(255, 255, 255)
AmongusR6Required.TextSize = 18.000
AmongusR6Required.TextTransparency = 1.000
AmongusR6Required.TextWrapped = true

TextLabel_6.Parent = AmongusR6Required
TextLabel_6.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_6.BackgroundTransparency = 2.000
TextLabel_6.Position = UDim2.new(0.0139860138, 0, 0, 0)
TextLabel_6.Size = UDim2.new(0, 353, 0, 25)
TextLabel_6.Font = Enum.Font.TitilliumWeb
TextLabel_6.Text = "Amongus [R6 Required]"
TextLabel_6.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_6.TextSize = 19.000
TextLabel_6.TextXAlignment = Enum.TextXAlignment.Left

ImageButton_3.Parent = AmongusR6Required
ImageButton_3.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
ImageButton_3.BackgroundTransparency = 1.000
ImageButton_3.Position = UDim2.new(0.946386933, 0, 0.115384616, 0)
ImageButton_3.Rotation = 180.000
ImageButton_3.Size = UDim2.new(0, 17, 0, 19)
ImageButton_3.Image = "rbxassetid://929678762"
ImageButton_3.ImageColor3 = Color3.fromRGB(204, 0, 0)
ImageButton_3.ScaleType = Enum.ScaleType.Fit

UICorner_8.CornerRadius = UDim.new(0, 10)
UICorner_8.Parent = AmongusR6Required

CursedAnimsR6Required.Name = "Cursed Anims [R6 Required]"
CursedAnimsR6Required.Parent = Items
CursedAnimsR6Required.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
CursedAnimsR6Required.BorderSizePixel = 0
CursedAnimsR6Required.Position = UDim2.new(0, 0, 0.0143597908, 0)
CursedAnimsR6Required.Selectable = false
CursedAnimsR6Required.Size = UDim2.new(0, 429, 0, 26)
CursedAnimsR6Required.AutoButtonColor = false
CursedAnimsR6Required.Font = Enum.Font.TitilliumWeb
CursedAnimsR6Required.Text = "Cursed Anims [R6 Required]"
CursedAnimsR6Required.TextColor3 = Color3.fromRGB(255, 255, 255)
CursedAnimsR6Required.TextSize = 18.000
CursedAnimsR6Required.TextTransparency = 1.000
CursedAnimsR6Required.TextWrapped = true

TextLabel_7.Parent = CursedAnimsR6Required
TextLabel_7.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_7.BackgroundTransparency = 2.000
TextLabel_7.Position = UDim2.new(0.0139860138, 0, 0, 0)
TextLabel_7.Size = UDim2.new(0, 353, 0, 25)
TextLabel_7.Font = Enum.Font.TitilliumWeb
TextLabel_7.Text = "Cursed Anims [R6 Required]"
TextLabel_7.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_7.TextSize = 19.000
TextLabel_7.TextXAlignment = Enum.TextXAlignment.Left

ImageButton_4.Parent = CursedAnimsR6Required
ImageButton_4.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
ImageButton_4.BackgroundTransparency = 1.000
ImageButton_4.Position = UDim2.new(0.946386933, 0, 0.115384616, 0)
ImageButton_4.Rotation = 180.000
ImageButton_4.Size = UDim2.new(0, 17, 0, 19)
ImageButton_4.Image = "rbxassetid://929678762"
ImageButton_4.ImageColor3 = Color3.fromRGB(204, 0, 0)
ImageButton_4.ScaleType = Enum.ScaleType.Fit

UICorner_9.CornerRadius = UDim.new(0, 10)
UICorner_9.Parent = CursedAnimsR6Required

CrazyDanceR15Required.Name = "Crazy Dance [R15 Required]"
CrazyDanceR15Required.Parent = Items
CrazyDanceR15Required.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
CrazyDanceR15Required.BorderSizePixel = 0
CrazyDanceR15Required.Position = UDim2.new(0, 0, 0.0143597908, 0)
CrazyDanceR15Required.Selectable = false
CrazyDanceR15Required.Size = UDim2.new(0, 429, 0, 26)
CrazyDanceR15Required.AutoButtonColor = false
CrazyDanceR15Required.Font = Enum.Font.TitilliumWeb
CrazyDanceR15Required.Text = "Feet [R6 Required]"
CrazyDanceR15Required.TextColor3 = Color3.fromRGB(255, 255, 255)
CrazyDanceR15Required.TextSize = 18.000
CrazyDanceR15Required.TextTransparency = 1.000
CrazyDanceR15Required.TextWrapped = true

TextLabel_8.Parent = CrazyDanceR15Required
TextLabel_8.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_8.BackgroundTransparency = 2.000
TextLabel_8.Position = UDim2.new(0.0139860138, 0, 0, 0)
TextLabel_8.Size = UDim2.new(0, 353, 0, 25)
TextLabel_8.Font = Enum.Font.TitilliumWeb
TextLabel_8.Text = "Crazy Dance [R15 Required]"
TextLabel_8.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_8.TextSize = 19.000
TextLabel_8.TextXAlignment = Enum.TextXAlignment.Left

ImageButton_5.Parent = CrazyDanceR15Required
ImageButton_5.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
ImageButton_5.BackgroundTransparency = 1.000
ImageButton_5.Position = UDim2.new(0.946386933, 0, 0.115384616, 0)
ImageButton_5.Rotation = 180.000
ImageButton_5.Size = UDim2.new(0, 17, 0, 19)
ImageButton_5.Image = "rbxassetid://929678762"
ImageButton_5.ImageColor3 = Color3.fromRGB(204, 0, 0)
ImageButton_5.ScaleType = Enum.ScaleType.Fit

UICorner_10.CornerRadius = UDim.new(0, 10)
UICorner_10.Parent = CrazyDanceR15Required

SmallR15Required.Name = "Small [R15 Required]"
SmallR15Required.Parent = Items
SmallR15Required.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
SmallR15Required.BorderSizePixel = 0
SmallR15Required.Position = UDim2.new(0, 0, 0.0143597908, 0)
SmallR15Required.Selectable = false
SmallR15Required.Size = UDim2.new(0, 429, 0, 26)
SmallR15Required.AutoButtonColor = false
SmallR15Required.Font = Enum.Font.TitilliumWeb
SmallR15Required.Text = "Feet [R6 Required]"
SmallR15Required.TextColor3 = Color3.fromRGB(255, 255, 255)
SmallR15Required.TextSize = 18.000
SmallR15Required.TextTransparency = 1.000
SmallR15Required.TextWrapped = true

TextLabel_9.Parent = SmallR15Required
TextLabel_9.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_9.BackgroundTransparency = 2.000
TextLabel_9.Position = UDim2.new(0.0139860138, 0, 0, 0)
TextLabel_9.Size = UDim2.new(0, 353, 0, 25)
TextLabel_9.Font = Enum.Font.TitilliumWeb
TextLabel_9.Text = "Small [R15 Required]"
TextLabel_9.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_9.TextSize = 19.000
TextLabel_9.TextXAlignment = Enum.TextXAlignment.Left

ImageButton_6.Parent = SmallR15Required
ImageButton_6.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
ImageButton_6.BackgroundTransparency = 1.000
ImageButton_6.Position = UDim2.new(0.946386933, 0, 0.115384616, 0)
ImageButton_6.Rotation = 180.000
ImageButton_6.Size = UDim2.new(0, 17, 0, 19)
ImageButton_6.Image = "rbxassetid://929678762"
ImageButton_6.ImageColor3 = Color3.fromRGB(204, 0, 0)
ImageButton_6.ScaleType = Enum.ScaleType.Fit

UICorner_11.CornerRadius = UDim.new(0, 10)
UICorner_11.Parent = SmallR15Required

Border.Name = "Border"
Border.Parent = scriptlist
Border.AnchorPoint = Vector2.new(0.5, 0.5)
Border.BackgroundColor3 = Color3.fromRGB(42, 42, 42)
Border.BackgroundTransparency = 3.000
Border.BorderColor3 = Color3.fromRGB(42, 42, 42)
Border.BorderSizePixel = 2
Border.Position = UDim2.new(0.495575219, 0, 0.505873501, 0)
Border.Size = UDim2.new(1, 4, 0.999770999, 4)

UICorner_12.CornerRadius = UDim.new(0.0250000004, 2)
UICorner_12.Parent = Border

TextLabel_10.Parent = scriptlist
TextLabel_10.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_10.BackgroundTransparency = 3.000
TextLabel_10.Position = UDim2.new(0.0331848897, 0, 0.88719523, 0)
TextLabel_10.Size = UDim2.new(0, 242, 0, 50)
TextLabel_10.Font = Enum.Font.TitilliumWeb
TextLabel_10.Text = "*Note: These FE scripts does not require hats to run*"
TextLabel_10.TextColor3 = Color3.fromRGB(117, 117, 117)
TextLabel_10.TextSize = 16.000

list.Name = "list"
list.Parent = MainFrame
list.BackgroundColor3 = Color3.fromRGB(24, 24, 24)
list.BorderColor3 = Color3.fromRGB(227, 0, 0)
list.BorderSizePixel = 0
list.Size = UDim2.new(0, 162, 0, 352)

Settings_button.Name = "Settings_button"
Settings_button.Parent = list
Settings_button.BackgroundColor3 = Color3.fromRGB(34, 34, 34)
Settings_button.BorderSizePixel = 0
Settings_button.Position = UDim2.new(0.0429069661, 0, 0.398214489, 0)
Settings_button.Size = UDim2.new(0, 147, 0, 24)
Settings_button.Font = Enum.Font.TitilliumWeb
Settings_button.Text = "Settings"
Settings_button.TextColor3 = Color3.fromRGB(182, 0, 0)
Settings_button.TextSize = 17.000

UICorner_13.CornerRadius = UDim.new(0, 7)
UICorner_13.Parent = Settings_button

ImageLabel_3.Parent = Settings_button
ImageLabel_3.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ImageLabel_3.BackgroundTransparency = 2.000
ImageLabel_3.Position = UDim2.new(0.0272108912, 0, 0.0416666679, 0)
ImageLabel_3.Size = UDim2.new(0, 21, 0, 21)
ImageLabel_3.Image = "rbxassetid://8807642413"
ImageLabel_3.ScaleType = Enum.ScaleType.Fit

TextLabel_11.Parent = list
TextLabel_11.BackgroundColor3 = Color3.fromRGB(34, 34, 34)
TextLabel_11.Position = UDim2.new(0.0493024662, 0, 0.919655204, 0)
TextLabel_11.Size = UDim2.new(0, 145, 0, 22)
TextLabel_11.Font = Enum.Font.TitilliumWeb
TextLabel_11.Text = "Injectioner Servers "
TextLabel_11.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_11.TextSize = 17.000

UICorner_14.CornerRadius = UDim.new(0, 7)
UICorner_14.Parent = TextLabel_11

ImageLabel_4.Parent = TextLabel_11
ImageLabel_4.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ImageLabel_4.BackgroundTransparency = 3.000
ImageLabel_4.Position = UDim2.new(0.0544736348, 0, 0.244900793, 0)
ImageLabel_4.Size = UDim2.new(0, 14, 0, 11)
ImageLabel_4.Image = "rbxassetid://7119022492"
ImageLabel_4.ScaleType = Enum.ScaleType.Fit

Script_Button.Name = "Script_Button"
Script_Button.Parent = list
Script_Button.BackgroundColor3 = Color3.fromRGB(34, 34, 34)
Script_Button.BorderSizePixel = 0
Script_Button.Position = UDim2.new(0.0430000015, 0, 0.202999994, 0)
Script_Button.Size = UDim2.new(0, 147, 0, 24)
Script_Button.Font = Enum.Font.TitilliumWeb
Script_Button.Text = "FE Scripts"
Script_Button.TextColor3 = Color3.fromRGB(182, 0, 0)
Script_Button.TextSize = 17.000

UICorner_15.CornerRadius = UDim.new(0, 7)
UICorner_15.Parent = Script_Button

ImageLabel_5.Parent = Script_Button
ImageLabel_5.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ImageLabel_5.BackgroundTransparency = 2.000
ImageLabel_5.Position = UDim2.new(0.0272108912, 0, 0.0416666679, 0)
ImageLabel_5.Size = UDim2.new(0, 21, 0, 21)
ImageLabel_5.Image = "rbxassetid://95866080"
ImageLabel_5.ImageColor3 = Color3.fromRGB(255, 0, 0)
ImageLabel_5.ScaleType = Enum.ScaleType.Fit

Home_button.Name = "Home_button"
Home_button.Parent = list
Home_button.BackgroundColor3 = Color3.fromRGB(93, 17, 17)
Home_button.BorderSizePixel = 0
Home_button.Position = UDim2.new(0.0490798689, 0, 0.105113596, 0)
Home_button.Size = UDim2.new(0, 147, 0, 24)
Home_button.Font = Enum.Font.TitilliumWeb
Home_button.Text = "Home"
Home_button.TextColor3 = Color3.fromRGB(182, 0, 0)
Home_button.TextSize = 17.000

UICorner_16.CornerRadius = UDim.new(0, 7)
UICorner_16.Parent = Home_button

ImageLabel_6.Parent = Home_button
ImageLabel_6.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ImageLabel_6.BackgroundTransparency = 2.000
ImageLabel_6.Position = UDim2.new(0.0272108912, 0, 0.0416666679, 0)
ImageLabel_6.Size = UDim2.new(0, 21, 0, 21)
ImageLabel_6.Image = "rbxassetid://2174510075"
ImageLabel_6.ImageColor3 = Color3.fromRGB(255, 0, 0)
ImageLabel_6.ScaleType = Enum.ScaleType.Fit

misc_button.Name = "misc_button"
misc_button.Parent = list
misc_button.BackgroundColor3 = Color3.fromRGB(34, 34, 34)
misc_button.BorderSizePixel = 0
misc_button.Position = UDim2.new(0.0429069661, 0, 0.298782647, 0)
misc_button.Size = UDim2.new(0, 147, 0, 24)
misc_button.Font = Enum.Font.TitilliumWeb
misc_button.Text = "Miscellaneous"
misc_button.TextColor3 = Color3.fromRGB(182, 0, 0)
misc_button.TextSize = 17.000

UICorner_17.CornerRadius = UDim.new(0, 7)
UICorner_17.Parent = misc_button

ImageLabel_7.Parent = misc_button
ImageLabel_7.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ImageLabel_7.BackgroundTransparency = 2.000
ImageLabel_7.Position = UDim2.new(0.0272108912, 0, 0.0416666679, 0)
ImageLabel_7.Size = UDim2.new(0, 21, 0, 21)
ImageLabel_7.Image = "rbxassetid://95866080"
ImageLabel_7.ImageColor3 = Color3.fromRGB(255, 0, 0)
ImageLabel_7.ScaleType = Enum.ScaleType.Fit

bar.Name = "bar"
bar.Parent = MainFrame
bar.BackgroundColor3 = Color3.fromRGB(24, 24, 24)
bar.BorderColor3 = Color3.fromRGB(227, 0, 0)
bar.BorderSizePixel = 0
bar.Size = UDim2.new(0, 614, 0, 25)

ImageLabel_8.Parent = bar
ImageLabel_8.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ImageLabel_8.BackgroundTransparency = 2.000
ImageLabel_8.Position = UDim2.new(0.0130081428, 0, 0, 0)
ImageLabel_8.Size = UDim2.new(0, 30, 0, 25)
ImageLabel_8.Image = "http://www.roblox.com/asset/?id=9420542917"
ImageLabel_8.ScaleType = Enum.ScaleType.Fit

TextLabel_12.Parent = ImageLabel_8
TextLabel_12.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_12.BackgroundTransparency = 2.000
TextLabel_12.Position = UDim2.new(-1, 0, 0, 0)
TextLabel_12.Size = UDim2.new(0, 185, 0, 25)
TextLabel_12.Font = Enum.Font.TitilliumWeb
TextLabel_12.Text = "Injectioner"
TextLabel_12.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_12.TextSize = 20.000

TextLabel_13.Parent = ImageLabel_8
TextLabel_13.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_13.BackgroundTransparency = 2.000
TextLabel_13.Position = UDim2.new(2.16666675, 0, 0, 0)
TextLabel_13.Size = UDim2.new(0, 89, 0, 25)
TextLabel_13.Font = Enum.Font.TitilliumWeb
TextLabel_13.Text = "v1.0"
TextLabel_13.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_13.TextSize = 20.000

TextButton_2.Parent = bar
TextButton_2.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextButton_2.BackgroundTransparency = 3.000
TextButton_2.Position = UDim2.new(0.951140046, 0, 0, 0)
TextButton_2.Size = UDim2.new(0, 30, 0, 25)
TextButton_2.Visible = false
TextButton_2.Font = Enum.Font.Arial
TextButton_2.Text = "-"
TextButton_2.TextColor3 = Color3.fromRGB(227, 0, 0)
TextButton_2.TextSize = 20.000
TextButton_2.TextWrapped = true

Home.Name = "Home"
Home.Parent = MainFrame
Home.BackgroundColor3 = Color3.fromRGB(33, 33, 33)
Home.BorderSizePixel = 0
Home.Position = UDim2.new(0.265019625, 0, 0.0708215311, 0)
Home.Size = UDim2.new(0.733354449, 0, 0.929002821, 0)

ImageLabel_9.Parent = Home
ImageLabel_9.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
ImageLabel_9.BackgroundTransparency = 2.000
ImageLabel_9.Position = UDim2.new(0.398182034, 0, 0.213203549, 0)
ImageLabel_9.Size = UDim2.new(0, 90, 0, 79)
ImageLabel_9.Image = "http://www.roblox.com/asset/?id=9420542917"
ImageLabel_9.ScaleType = Enum.ScaleType.Fit

credit.Name = "credit"
credit.Parent = Home
credit.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
credit.BackgroundTransparency = 2.000
credit.Position = UDim2.new(0.171761245, 0, 0.56364876, 0)
credit.Size = UDim2.new(0, 294, 0, 26)
credit.Font = Enum.Font.TitilliumWeb
credit.Text = "Made by Marii & Void"
credit.TextColor3 = Color3.fromRGB(161, 161, 161)
credit.TextSize = 18.000
credit.TextWrapped = true

info.Name = "info"
info.Parent = Home
info.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
info.BackgroundTransparency = 2.000
info.Position = UDim2.new(0.171761245, 0, 0.506968439, 0)
info.Size = UDim2.new(0, 294, 0, 29)
info.Font = Enum.Font.TitilliumWeb
info.Text = "Most Advanced Exploit Lua Tool for ROBLOX"
info.TextColor3 = Color3.fromRGB(161, 161, 161)
info.TextSize = 18.000
info.TextWrapped = true

welcome.Name = "welcome"
welcome.Parent = Home
welcome.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
welcome.BackgroundTransparency = 2.000
welcome.Position = UDim2.new(0.171761215, 0, 0.4538109, 0)
welcome.Size = UDim2.new(0, 294, 0, 28)
welcome.Font = Enum.Font.TitilliumWeb
welcome.Text = "Welcome to Injectioner!"
welcome.TextColor3 = Color3.fromRGB(182, 0, 0)
welcome.TextSize = 25.000
welcome.TextStrokeTransparency = 0.700

Funnytest.Name = "Funnytest"
Funnytest.Parent = Home
Funnytest.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Funnytest.BackgroundTransparency = 2.000
Funnytest.Position = UDim2.new(0.176195711, 0, 0.646886706, 0)
Funnytest.Size = UDim2.new(0, 294, 0, 17)
Funnytest.Font = Enum.Font.TitilliumWeb
Funnytest.Text = "Imagine trying to get the source :clown:"
Funnytest.TextColor3 = Color3.fromRGB(0, 94, 182)
Funnytest.TextSize = 25.000
Funnytest.TextStrokeTransparency = 0.700

Settings.Name = "Settings"
Settings.Parent = MainFrame
Settings.BackgroundColor3 = Color3.fromRGB(33, 33, 33)
Settings.BorderSizePixel = 0
Settings.Position = UDim2.new(0.265019506, 0, 0.0708215311, 0)
Settings.Size = UDim2.new(0.733354449, 0, 0.929002821, 0)
Settings.Visible = false

R15toR6.Name = "R15 to R6"
R15toR6.Parent = Settings
R15toR6.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
R15toR6.BorderSizePixel = 0
R15toR6.Position = UDim2.new(0.0243895408, 0, 0.118037917, 0)
R15toR6.Selectable = false
R15toR6.Size = UDim2.new(0, 429, 0, 26)
R15toR6.AutoButtonColor = false
R15toR6.Font = Enum.Font.TitilliumWeb
R15toR6.Text = "Amongus [R6 Required]"
R15toR6.TextColor3 = Color3.fromRGB(255, 255, 255)
R15toR6.TextSize = 18.000
R15toR6.TextTransparency = 1.000
R15toR6.TextWrapped = true

TextLabel_14.Parent = R15toR6
TextLabel_14.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_14.BackgroundTransparency = 2.000
TextLabel_14.Position = UDim2.new(0.0139860138, 0, 0, 0)
TextLabel_14.Size = UDim2.new(0, 353, 0, 25)
TextLabel_14.Font = Enum.Font.TitilliumWeb
TextLabel_14.Text = "R15 to R6"
TextLabel_14.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_14.TextSize = 19.000
TextLabel_14.TextXAlignment = Enum.TextXAlignment.Left

ImageButton_7.Parent = R15toR6
ImageButton_7.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
ImageButton_7.BackgroundTransparency = 1.000
ImageButton_7.Position = UDim2.new(0.946386933, 0, 0.115384616, 0)
ImageButton_7.Rotation = 180.000
ImageButton_7.Size = UDim2.new(0, 17, 0, 19)
ImageButton_7.Image = "rbxassetid://929678762"
ImageButton_7.ImageColor3 = Color3.fromRGB(204, 0, 0)
ImageButton_7.ScaleType = Enum.ScaleType.Fit

UICorner_18.CornerRadius = UDim.new(0, 10)
UICorner_18.Parent = R15toR6

Netless.Name = "Netless"
Netless.Parent = Settings
Netless.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
Netless.BorderSizePixel = 0
Netless.Position = UDim2.new(0.0243895408, 0, 0.0235078614, 0)
Netless.Selectable = false
Netless.Size = UDim2.new(0, 429, 0, 26)
Netless.AutoButtonColor = false
Netless.Font = Enum.Font.TitilliumWeb
Netless.Text = "Amongus [R6 Required]"
Netless.TextColor3 = Color3.fromRGB(255, 255, 255)
Netless.TextSize = 18.000
Netless.TextTransparency = 1.000
Netless.TextWrapped = true

TextLabel_15.Parent = Netless
TextLabel_15.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_15.BackgroundTransparency = 2.000
TextLabel_15.Position = UDim2.new(0.0139860138, 0, 0, 0)
TextLabel_15.Size = UDim2.new(0, 353, 0, 25)
TextLabel_15.Font = Enum.Font.TitilliumWeb
TextLabel_15.Text = "Netless"
TextLabel_15.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_15.TextSize = 19.000
TextLabel_15.TextXAlignment = Enum.TextXAlignment.Left

ImageButton_8.Parent = Netless
ImageButton_8.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
ImageButton_8.BackgroundTransparency = 1.000
ImageButton_8.Position = UDim2.new(0.946386933, 0, 0.115384616, 0)
ImageButton_8.Rotation = 180.000
ImageButton_8.Size = UDim2.new(0, 17, 0, 19)
ImageButton_8.Image = "rbxassetid://929678762"
ImageButton_8.ImageColor3 = Color3.fromRGB(204, 0, 0)
ImageButton_8.ScaleType = Enum.ScaleType.Fit

UICorner_19.CornerRadius = UDim.new(0, 10)
UICorner_19.Parent = Netless

miscellaneous.Name = "miscellaneous"
miscellaneous.Parent = MainFrame
miscellaneous.AnchorPoint = Vector2.new(0.5, 0.5)
miscellaneous.BackgroundColor3 = Color3.fromRGB(46, 46, 46)
miscellaneous.BackgroundTransparency = 3.000
miscellaneous.BorderColor3 = Color3.fromRGB(42, 42, 42)
miscellaneous.BorderSizePixel = 2
miscellaneous.Position = UDim2.new(0.632509828, 0, 0.535410762, 0)
miscellaneous.Size = UDim2.new(0.734980404, 0, 0.929178357, 0)
miscellaneous.Visible = false

SearchBar_2.Name = "SearchBar"
SearchBar_2.Parent = miscellaneous
SearchBar_2.AnchorPoint = Vector2.new(0.5, 0)
SearchBar_2.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
SearchBar_2.BorderColor3 = Color3.fromRGB(32, 32, 32)
SearchBar_2.BorderSizePixel = 0
SearchBar_2.Position = UDim2.new(0.495575219, 0, 0.0309809186, 0)
SearchBar_2.Size = UDim2.new(0.949999988, 0, 0.0749830306, 0)
SearchBar_2.Font = Enum.Font.TitilliumWeb
SearchBar_2.PlaceholderColor3 = Color3.fromRGB(102, 102, 102)
SearchBar_2.PlaceholderText = "Search"
SearchBar_2.Text = ""
SearchBar_2.TextColor3 = Color3.fromRGB(204, 204, 204)
SearchBar_2.TextScaled = true
SearchBar_2.TextSize = 14.000
SearchBar_2.TextWrapped = true

UICorner_20.Parent = SearchBar_2

Items_2.Name = "Items"
Items_2.Parent = miscellaneous
Items_2.Active = true
Items_2.AnchorPoint = Vector2.new(0.5, 0)
Items_2.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Items_2.BackgroundTransparency = 1.000
Items_2.BorderSizePixel = 0
Items_2.Position = UDim2.new(0.495575219, 0, 0.130958438, 0)
Items_2.Size = UDim2.new(0.949999988, 0, 0.849804342, 5)
Items_2.ScrollBarThickness = 0

InfiniteYieldFE.Name = "Infinite Yield FE"
InfiniteYieldFE.Parent = Items_2
InfiniteYieldFE.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
InfiniteYieldFE.BorderSizePixel = 0
InfiniteYieldFE.Position = UDim2.new(0, 0, 0.0143597908, 0)
InfiniteYieldFE.Selectable = false
InfiniteYieldFE.Size = UDim2.new(0, 429, 0, 26)
InfiniteYieldFE.AutoButtonColor = false
InfiniteYieldFE.Font = Enum.Font.TitilliumWeb
InfiniteYieldFE.Text = "Infinite Yield FE"
InfiniteYieldFE.TextColor3 = Color3.fromRGB(255, 255, 255)
InfiniteYieldFE.TextSize = 18.000
InfiniteYieldFE.TextTransparency = 1.000

TextLabel_16.Parent = InfiniteYieldFE
TextLabel_16.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_16.BackgroundTransparency = 2.000
TextLabel_16.Position = UDim2.new(0.0139860138, 0, 0, 0)
TextLabel_16.Size = UDim2.new(0, 66, 0, 25)
TextLabel_16.Font = Enum.Font.TitilliumWeb
TextLabel_16.Text = "Infinite Yield FE"
TextLabel_16.TextColor3 = Color3.fromRGB(182, 0, 0)
TextLabel_16.TextSize = 19.000
TextLabel_16.TextXAlignment = Enum.TextXAlignment.Left

ImageButton_9.Parent = InfiniteYieldFE
ImageButton_9.BackgroundColor3 = Color3.fromRGB(26, 26, 26)
ImageButton_9.BackgroundTransparency = 1.000
ImageButton_9.Position = UDim2.new(0.946386933, 0, 0.115384616, 0)
ImageButton_9.Rotation = 180.000
ImageButton_9.Size = UDim2.new(0, 17, 0, 19)
ImageButton_9.Image = "rbxassetid://929678762"
ImageButton_9.ImageColor3 = Color3.fromRGB(204, 0, 0)
ImageButton_9.ScaleType = Enum.ScaleType.Fit

UICorner_21.CornerRadius = UDim.new(0, 10)
UICorner_21.Parent = InfiniteYieldFE

UIListLayout_2.Parent = Items_2
UIListLayout_2.HorizontalAlignment = Enum.HorizontalAlignment.Center
UIListLayout_2.Padding = UDim.new(0, 5)

Border_2.Name = "Border"
Border_2.Parent = miscellaneous
Border_2.AnchorPoint = Vector2.new(0.5, 0.5)
Border_2.BackgroundColor3 = Color3.fromRGB(42, 42, 42)
Border_2.BackgroundTransparency = 3.000
Border_2.BorderColor3 = Color3.fromRGB(42, 42, 42)
Border_2.BorderSizePixel = 2
Border_2.Position = UDim2.new(0.495575219, 0, 0.505873501, 0)
Border_2.Size = UDim2.new(1, 4, 0.999770999, 4)

UICorner_22.CornerRadius = UDim.new(0.0250000004, 2)
UICorner_22.Parent = Border_2

-- Scripts:

local function SRLZLMH_fake_script() -- loginButton.LocalScript 
	local script = Instance.new('LocalScript', loginButton)

	local subbtn = script.Parent.Parent.loginButton
	local frame = script.Parent.Parent
	local main = script.Parent.Parent.Parent.MainFrame
	local passbox = script.Parent.Parent.key
	local plr = game:GetService("Players")
	
	
	local password1 = "funne"
	
	
	subbtn.MouseButton1Click:Connect(function()
		if passbox.Text == password1 then
			wait(1)
			frame:TweenPosition(UDim2.new(0.5, 0,2, 0),"InOut","Sine")
			wait(1)
			frame.Visible = false
			main.Visible = true
			main:TweenPosition(UDim2.new(0.5, 0,0.5, 0),"InOut","Sine")
		else
			game.Players.LocalPlayer:Kick("[Injectioner Bot]: Error! Wrong login credentials")
		end
	end)
end
coroutine.wrap(SRLZLMH_fake_script)()
local function EHVNVZ_fake_script() -- Login.LocalScript 
	local script = Instance.new('LocalScript', Login)

	local UserInputService = game:GetService("UserInputService")
	local runService = (game:GetService("RunService"));
	
	local gui = script.Parent
	
	local dragging
	local dragInput
	local dragStart
	local startPos
	
	function Lerp(a, b, m)
		return a + (b - a) * m
	end;
	
	local lastMousePos
	local lastGoalPos
	local DRAG_SPEED = (50); 
	function Update(dt)
		if not (startPos) then return end;
		if not (dragging) and (lastGoalPos) then
			gui.Position = UDim2.new(startPos.X.Scale, Lerp(gui.Position.X.Offset, lastGoalPos.X.Offset, dt * DRAG_SPEED), startPos.Y.Scale, Lerp(gui.Position.Y.Offset, lastGoalPos.Y.Offset, dt * DRAG_SPEED))
			return 
		end;
	
		local delta = (lastMousePos - UserInputService:GetMouseLocation())
		local xGoal = (startPos.X.Offset - delta.X);
		local yGoal = (startPos.Y.Offset - delta.Y);
		lastGoalPos = UDim2.new(startPos.X.Scale, xGoal, startPos.Y.Scale, yGoal)
		gui.Position = UDim2.new(startPos.X.Scale, Lerp(gui.Position.X.Offset, xGoal, dt * DRAG_SPEED), startPos.Y.Scale, Lerp(gui.Position.Y.Offset, yGoal, dt * DRAG_SPEED))
	end;
	
	gui.InputBegan:Connect(function(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
			dragging = true
			dragStart = input.Position
			startPos = gui.Position
			lastMousePos = UserInputService:GetMouseLocation()
	
			input.Changed:Connect(function()
				if input.UserInputState == Enum.UserInputState.End then
					dragging = false
				end
			end)
		end
	end)
	
	gui.InputChanged:Connect(function(input)
		if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then
			dragInput = input
		end
	end)
	
	runService.Heartbeat:Connect(Update)
end
coroutine.wrap(EHVNVZ_fake_script)()
local function VVPS_fake_script() -- enable.LocalScript 
	local script = Instance.new('LocalScript', enable)

	local player = game.Players.LocalPlayer
	local db = true
	local button = script.Parent.Parent.Parent.Login.enable
	local text = script.Parent.Parent.Parent.Login.key
	
	script.Parent.MouseButton1Click:Connect(function()
		if db == true then
			db = false
			button.BackgroundColor3 = Color3.new(0.113725, 0.760784, 0)
			text.TextColor3 = Color3.new(0.101961, 0.101961, 0.101961)
		else
			db = true
			button.BackgroundColor3 = Color3.new(0.760784, 0, 0)
			text.TextColor3 = Color3.new(0.713725, 0, 0)
		end
	end)
end
coroutine.wrap(VVPS_fake_script)()
local function DQEF_fake_script() -- ImageLabel.LocalScript 
	local script = Instance.new('LocalScript', ImageLabel)

	local sine = 0
	local change = 3
	
	while true do
	wait()
	sine = sine + change
	script.Parent.Rotation = 0 - 6 * math.cos(sine / 40)
	end
end
coroutine.wrap(DQEF_fake_script)()
local function LJFET_fake_script() -- TextButton.LocalScript 
	local script = Instance.new('LocalScript', TextButton)

	local player = game.Players.LocalPlayer
	local db = true
	local mainframe = script.Parent.Parent.Parent.MainFrame
	local open = script.Parent.Parent.Parent.Open
	
	
	script.Parent.MouseButton1Click:Connect(function()
		if db == true then
			db = false
			mainframe.Visible = true
			open.Visible = false
		else
			mainframe.Visible = false
			open.Visible = true
		end
	end)
end
coroutine.wrap(LJFET_fake_script)()
local function DGUA_fake_script() -- Injectioner.LocalScript 
	local script = Instance.new('LocalScript', Injectioner)

	local image = script.Parent.logo
	local inject = script.Parent.logo.inject
	local login = script.Parent.Login
	local mainframe = script.Parent.MainFrame
	Sentences = {"I like mombucks","Marii is cool","imagine free","kinda lame"}
	local t = 0000.1
	wait(0)
	game:GetService("StarterGui"):SetCore("ChatMakeSystemMessage",{ --Getting "StarterGui" and calling the function
		Text = "[Injectioner]: Success! Welcome to Injectioner, "..game.Players.LocalPlayer.Name.."!";
		Color = Color3.new(1, 0, 0);
		FontSize = Enum.FontSize.Size24;
	})
	script.Parent.MainFrame.Home.Funnytest.Text = Sentences[math.random(1,#Sentences)]
	image.ImageTransparency = 1
	inject.TextTransparency = 1
	wait(t)
	image.ImageTransparency = 0.9
	inject.TextTransparency = 0.9
	wait(t)
	image.ImageTransparency = 0.8
	inject.TextTransparency = 0.8
	wait(t)
	image.ImageTransparency = 0.7
	inject.TextTransparency = 0.7
	wait(t)
	image.ImageTransparency = 0.6
	inject.TextTransparency = 0.6
	wait(t)
	image.ImageTransparency = 0.5
	inject.TextTransparency = 0.5
	wait(t)
	image.ImageTransparency = 0.4
	inject.TextTransparency = 0.4
	wait(t)
	image.ImageTransparency = 0.3
	inject.TextTransparency = 0.3
	wait(t)
	image.ImageTransparency = 0.2
	inject.TextTransparency = 0.2
	wait(t)
	image.ImageTransparency = 0.1
	inject.TextTransparency = 0.1
	wait(t)
	image.ImageTransparency = 0
	inject.TextTransparency = 0
	wait(3)
	image.ImageTransparency = 0.1
	inject.TextTransparency = 0.1
	wait(t)
	image.ImageTransparency = 0.2
	inject.TextTransparency = 0.2
	wait(t)
	image.ImageTransparency = 0.3
	inject.TextTransparency = 0.3
	wait(t)
	image.ImageTransparency = 0.4
	inject.TextTransparency = 0.4
	wait(t)
	image.ImageTransparency = 0.5
	inject.TextTransparency = 0.5
	wait(t)
	image.ImageTransparency = 0.6
	inject.TextTransparency = 0.6
	wait(t)
	image.ImageTransparency = 0.7
	inject.TextTransparency = 0.7
	wait(t)
	image.ImageTransparency = 0.8
	inject.TextTransparency = 0.8
	wait(t)
	image.ImageTransparency = 0.9
	inject.TextTransparency = 0.9
	wait(t)
	image.ImageTransparency = 1
	inject.TextTransparency = 1
	wait(t)
	mainframe.Visible = true
	mainframe:TweenPosition(UDim2.new(0.5, 0,0.5, 0),"InOut","Sine")
	
end
coroutine.wrap(DGUA_fake_script)()
local function SJADZN_fake_script() -- ImageButton.LocalScript 
	local script = Instance.new('LocalScript', ImageButton)

	function OnClicked() 
		if "MyWorld reanimate cool" then
			--reanimate by MyWorld#4430 discord.gg/pYVHtSJmEY
			local netboost = Vector3.new(0, 45, 0) --velocity 
			--netboost usage: 
			--set to false to disable
			--set to a vector3 value if you dont want the velocity to change
			--set to a number to change the velocity in real time with magnitude equal to the number
			local idleMag = 0.01 --used only in case netboost is set to a number value
			--if magnitude of the real velocity of a part is lower than this
			--then the fake velocity is being set to Vector3.new(0, netboost, 0)
			local noRotVel = true --parts rotation velocity set to Vector3.new(0, 0, 0)
			local simradius = "shp" --simulation radius (net bypass) method
			--"shp" - sethiddenproperty
			--"ssr" - setsimulationradius
			--false - disable
			local antiragdoll = true --removes hingeConstraints and ballSocketConstraints from your character
			local newanimate = true --disables the animate script and enables after reanimation
			local discharscripts = true --disables all localScripts parented to your character before reanimation
			local R15toR6 = true --tries to convert your character to r6 if its r15
			local addtools = false --puts all tools from backpack to character and lets you hold them after reanimation
			local hedafterneck = true --disable aligns for head and enable after neck is removed
			local loadtime = game:GetService("Players").RespawnTime + 0.5 --anti respawn delay
			local method = 3 --reanimation method
			--methods:
			--0 - breakJoints (takes [loadtime] seconds to laod)
			--1 - limbs
			--2 - limbs + anti respawn
			--3 - limbs + breakJoints after [loadtime] seconds
			--4 - remove humanoid + breakJoints
			--5 - remove humanoid + limbs
			local alignmode = 2 --AlignPosition mode
			--modes:
			--1 - AlignPosition rigidity enabled true
			--2 - 2 AlignPositions rigidity enabled both true and false
			--3 - AlignPosition rigidity enabled false
	
			local lp = game:GetService("Players").LocalPlayer
			local rs = game:GetService("RunService")
			local stepped = rs.Stepped
			local heartbeat = rs.Heartbeat
			local renderstepped = rs.RenderStepped
			local sg = game:GetService("StarterGui")
			local ws = game:GetService("Workspace")
			local cf = CFrame.new
			local v3 = Vector3.new
			local v3_0 = v3(0, 0, 0)
			local inf = math.huge
	
			local c = lp.Character
	
			if not (c and c.Parent) then
				return
			end
	
			c.Destroying:Connect(function()
				c = nil
			end)
	
			local function gp(parent, name, className)
				if typeof(parent) == "Instance" then
					for i, v in pairs(parent:GetChildren()) do
						if (v.Name == name) and v:IsA(className) then
							return v
						end
					end
				end
				return nil
			end
	
			local function align(Part0, Part1)
				Part0.CustomPhysicalProperties = PhysicalProperties.new(0.0001, 0.0001, 0.0001, 0.0001, 0.0001)
	
				local att0 = Instance.new("Attachment", Part0)
				att0.Orientation = v3_0
				att0.Position = v3_0
				att0.Name = "att0_" .. Part0.Name
				local att1 = Instance.new("Attachment", Part1)
				att1.Orientation = v3_0
				att1.Position = v3_0
				att1.Name = "att1_" .. Part1.Name
	
				if (alignmode == 1) or (alignmode == 2) then
					local ape = Instance.new("AlignPosition", att0)
					ape.ApplyAtCenterOfMass = false
					ape.MaxForce = inf
					ape.MaxVelocity = inf
					ape.ReactionForceEnabled = false
					ape.Responsiveness = 200
					ape.Attachment1 = att1
					ape.Attachment0 = att0
					ape.Name = "AlignPositionRtrue"
					ape.RigidityEnabled = true
				end
	
				if (alignmode == 2) or (alignmode == 3) then
					local apd = Instance.new("AlignPosition", att0)
					apd.ApplyAtCenterOfMass = false
					apd.MaxForce = inf
					apd.MaxVelocity = inf
					apd.ReactionForceEnabled = false
					apd.Responsiveness = 200
					apd.Attachment1 = att1
					apd.Attachment0 = att0
					apd.Name = "AlignPositionRfalse"
					apd.RigidityEnabled = false
				end
	
				local ao = Instance.new("AlignOrientation", att0)
				ao.MaxAngularVelocity = inf
				ao.MaxTorque = inf
				ao.PrimaryAxisOnly = false
				ao.ReactionTorqueEnabled = false
				ao.Responsiveness = 200
				ao.Attachment1 = att1
				ao.Attachment0 = att0
				ao.RigidityEnabled = false
	
				if netboost then
					local steppedcon = nil
					local heartbeatcon = nil
					Part0.Destroying:Connect(function()
						Part0 = nil
						steppedcon:Disconnect()
						heartbeatcon:Disconnect()
					end)
					local vel = v3_0
					local rotvel = noRotVel and v3_0
					if typeof(netboost) == "Vector3" then
						steppedcon = stepped:Connect(function()
							Part0.Velocity = vel
							if rotvel then
								Part0.RotVelocity = rotvel
							end
						end)
						heartbeatcon = heartbeat:Connect(function()
							vel = Part0.Velocity
							Part0.Velocity = netboost
							if rotvel then
								rotvel = Part0.RotVelocity
								Part0.RotVelocity = v3_0
							end
						end)
					elseif typeof(netboost) == "number" then
						steppedcon = stepped:Connect(function()
							Part0.Velocity = vel
							if rotvel then
								Part0.RotVelocity = rotvel
							end
						end)
						heartbeatcon = heartbeat:Connect(function()
							vel = Part0.Velocity
							local newvel = vel
							local mag = newvel.Magnitude
							if mag < idleMag then
								newvel = v3(0, netboost, 0)
							else
								local multiplier = netboost / mag
								newvel *= v3(multiplier,  multiplier, multiplier)
							end
							Part0.Velocity = newvel
							if rotvel then
								rotvel = Part0.RotVelocity
								Part0.RotVelocity = v3_0
							end
						end)
					end
				end
			end
	
			local function respawnrequest()
				local ccfr = ws.CurrentCamera.CFrame
				local c = lp.Character
				lp.Character = nil
				lp.Character = c
				local con = nil
				con = ws.CurrentCamera.Changed:Connect(function(prop)
					if (prop ~= "Parent") and (prop ~= "CFrame") then
						return
					end
					ws.CurrentCamera.CFrame = ccfr
					con:Disconnect()
				end)
			end
	
			local destroyhum = (method == 4) or (method == 5)
			local breakjoints = (method == 0) or (method == 4)
			local antirespawn = (method == 0) or (method == 2) or (method == 3)
	
			addtools = addtools and gp(lp, "Backpack", "Backpack")
	
			local fenv = getfenv()
			if simradius == "shp" then
				local shp = fenv.sethiddenproperty or fenv.set_hidden_property or fenv.set_hidden_prop or fenv.sethiddenprop
				if shp then
					spawn(function()
						while c and heartbeat:Wait() do
							shp(lp, "SimulationRadius", inf)
						end
					end)
				end
			elseif simradius == "ssr" then
				local ssr = fenv.setsimulationradius or fenv.set_simulation_radius or fenv.set_sim_radius or fenv.setsimradius or fenv.set_simulation_rad or fenv.setsimulationrad
				if ssr then
					spawn(function()
						while c and heartbeat:Wait() do
							ssr(inf)
						end
					end)
				end
			end
	
			antiragdoll = antiragdoll and function(v)
				if v:IsA("HingeConstraint") or v:IsA("BallSocketConstraint") then
					v.Parent = nil
				end
			end
	
			if antiragdoll then
				for i, v in pairs(c:GetDescendants()) do
					antiragdoll(v)
				end
				c.DescendantAdded:Connect(antiragdoll)
			end
	
			if antirespawn then
				respawnrequest()
			end
	
			if method == 0 then
				wait(loadtime)
				if not c then
					return
				end
			end
	
			if discharscripts then
				for i, v in pairs(c:GetChildren()) do
					if v:IsA("LocalScript") then
						v.Disabled = true
					end
				end
			elseif newanimate then
				local animate = gp(c, "Animate", "LocalScript")
				if animate and (not animate.Disabled) then
					animate.Disabled = true
				else
					newanimate = false
				end
			end
	
			local hum = c:FindFirstChildOfClass("Humanoid")
			if hum then
				for i, v in pairs(hum:GetPlayingAnimationTracks()) do
					v:Stop()
				end
			end
	
			if addtools then
				for i, v in pairs(addtools:GetChildren()) do
					if v:IsA("Tool") then
						v.Parent = c
					end
				end
			end
	
			pcall(function()
				settings().Physics.AllowSleep = false
				settings().Physics.PhysicsEnvironmentalThrottle = Enum.EnviromentalPhysicsThrottle.Disabled
			end)
	
			local OLDscripts = {}
	
			for i, v in pairs(c:GetDescendants()) do
				if v.ClassName == "Script" then
					table.insert(OLDscripts, v)
				end
			end
	
			local scriptNames = {}
	
			for i, v in pairs(c:GetDescendants()) do
				if v:IsA("BasePart") then
					local newName = tostring(i)
					local exists = true
					while exists do
						exists = false
						for i, v in pairs(OLDscripts) do
							if v.Name == newName then
								exists = true
							end
						end
						if exists then
							newName = newName .. "_"    
						end
					end
					table.insert(scriptNames, newName)
					Instance.new("Script", v).Name = newName
				end
			end
	
			c.Archivable = true
			local cl = c:Clone()
			for i, v in pairs(cl:GetDescendants()) do
				if v:IsA("BasePart") then
					v.Transparency = 1
					v.Anchored = false
				end
			end
	
			local model = Instance.new("Model", c)
			model.Name = model.ClassName
	
			model.Destroying:Connect(function()
				model = nil
			end)
	
			for i, v in pairs(c:GetChildren()) do
				if v ~= model then
					if destroyhum and v:IsA("Humanoid") then
						v:Destroy()
					else
						if addtools and v:IsA("Tool") then
							for i1, v1 in pairs(v:GetDescendants()) do
								if v1 and v1.Parent and v1:IsA("BasePart") then
									local bv = Instance.new("BodyVelocity", v1)
									bv.Velocity = v3_0
									bv.MaxForce = v3(1000, 1000, 1000)
									bv.P = 1250
									bv.Name = "bv_" .. v.Name
								end
							end
						end
						v.Parent = model
					end
				end
			end
			local head = gp(model, "Head", "BasePart")
			local torso = gp(model, "Torso", "BasePart") or gp(model, "UpperTorso", "BasePart")
			if breakjoints then
				model:BreakJoints()
			else
				if head and torso then
					for i, v in pairs(model:GetDescendants()) do
						if v:IsA("Weld") or v:IsA("Snap") or v:IsA("Glue") or v:IsA("Motor") or v:IsA("Motor6D") then
							local save = false
							if (v.Part0 == torso) and (v.Part1 == head) then
								save = true
							end
							if (v.Part0 == head) and (v.Part1 == torso) then
								save = true
							end
							if save then
								if hedafterneck then
									hedafterneck = v
								end
							else
								v:Destroy()
							end
						end
					end
				end
				if method == 3 then
					spawn(function()
						wait(loadtime)
						if model then
							model:BreakJoints()
						end
					end)
				end
			end
	
			cl.Parent = c
			for i, v in pairs(cl:GetChildren()) do
				v.Parent = c
			end
			cl:Destroy()
	
			local modelDes = {}
			for i, v in pairs(model:GetDescendants()) do
				if v:IsA("BasePart") then
					i = tostring(i)
					v.Destroying:Connect(function()
						modelDes[i] = nil
					end)
					modelDes[i] = v
				end
			end
			local modelcolcon = nil
			local function modelcolf()
				if model then
					for i, v in pairs(modelDes) do
						v.CanCollide = false
					end
				else
					modelcolcon:Disconnect()
				end
			end
			modelcolcon = stepped:Connect(modelcolf)
			modelcolf()
	
			for i, scr in pairs(model:GetDescendants()) do
				if (scr.ClassName == "Script") and table.find(scriptNames, scr.Name) then
					local Part0 = scr.Parent
					if Part0:IsA("BasePart") then
						for i1, scr1 in pairs(c:GetDescendants()) do
							if (scr1.ClassName == "Script") and (scr1.Name == scr.Name) and (not scr1:IsDescendantOf(model)) then
								local Part1 = scr1.Parent
								if (Part1.ClassName == Part0.ClassName) and (Part1.Name == Part0.Name) then
									align(Part0, Part1)
									break
								end
							end
						end
					end
				end
			end
	
			if (typeof(hedafterneck) == "Instance") and head then
				local aligns = {}
				local con = nil
				con = hedafterneck.Changed:Connect(function(prop)
					if (prop == "Parent") and not hedafterneck.Parent then
						con:Disconnect()
						for i, v in pairs(aligns) do
							v.Enabled = true
						end
					end
				end)
				for i, v in pairs(head:GetDescendants()) do
					if v:IsA("AlignPosition") or v:IsA("AlignOrientation") then
						i = tostring(i)
						aligns[i] = v
						v.Destroying:Connect(function()
							aligns[i] = nil
						end)
						v.Enabled = false
					end
				end
			end
	
			for i, v in pairs(c:GetDescendants()) do
				if v and v.Parent then
					if v.ClassName == "Script" then
						if table.find(scriptNames, v.Name) then
							v:Destroy()
						end
					elseif not v:IsDescendantOf(model) then
						if v:IsA("Decal") then
							v.Transparency = 1
						elseif v:IsA("ForceField") then
							v.Visible = false
						elseif v:IsA("Sound") then
							v.Playing = false
						elseif v:IsA("BillboardGui") or v:IsA("SurfaceGui") or v:IsA("ParticleEmitter") or v:IsA("Fire") or v:IsA("Smoke") or v:IsA("Sparkles") then
							v.Enabled = false
						end
					end
				end
			end
	
			if newanimate then
				local animate = gp(c, "Animate", "LocalScript")
				if animate then
					animate.Disabled = false
				end
			end
	
			if addtools then
				for i, v in pairs(c:GetChildren()) do
					if v:IsA("Tool") then
						v.Parent = addtools
					end
				end
			end
	
			local hum0 = model:FindFirstChildOfClass("Humanoid")
			if hum0 then
				hum0.Destroying:Connect(function()
					hum0 = nil
				end)
			end
	
			local hum1 = c:FindFirstChildOfClass("Humanoid")
			if hum1 then
				hum1.Destroying:Connect(function()
					hum1 = nil
				end)
			end
	
			if hum1 then
				ws.CurrentCamera.CameraSubject = hum1
				local camSubCon = nil
				local function camSubFunc()
					camSubCon:Disconnect()
					if c and hum1 then
						ws.CurrentCamera.CameraSubject = hum1
					end
				end
				camSubCon = renderstepped:Connect(camSubFunc)
				if hum0 then
					hum0.Changed:Connect(function(prop)
						if hum1 and (prop == "Jump") then
							hum1.Jump = hum0.Jump
						end
					end)
				else
					respawnrequest()
				end
			end
	
			local rb = Instance.new("BindableEvent", c)
			rb.Event:Connect(function()
				rb:Destroy()
				sg:SetCore("ResetButtonCallback", true)
				if destroyhum then
					c:BreakJoints()
					return
				end
				if hum0 and (hum0.Health > 0) then
					model:BreakJoints()
					hum0.Health = 0
				end
				if antirespawn then
					respawnrequest()
				end
			end)
			sg:SetCore("ResetButtonCallback", rb)
	
			spawn(function()
				while c do
					if hum0 and hum1 then
						hum1.Jump = hum0.Jump
					end
					wait()
				end
				sg:SetCore("ResetButtonCallback", true)
			end)
	
			R15toR6 = R15toR6 and hum1 and (hum1.RigType == Enum.HumanoidRigType.R15)
			if R15toR6 then
				local part = gp(c, "HumanoidRootPart", "BasePart") or gp(c, "UpperTorso", "BasePart") or gp(c, "LowerTorso", "BasePart") or gp(c, "Head", "BasePart") or c:FindFirstChildWhichIsA("BasePart")
				if part then
					local cfr = part.CFrame
					local R6parts = { 
						head = {
							Name = "Head",
							Size = v3(2, 1, 1),
							R15 = {
								Head = 0
							}
						},
						torso = {
							Name = "Torso",
							Size = v3(2, 2, 1),
							R15 = {
								UpperTorso = 0.2,
								LowerTorso = -0.8
							}
						},
						root = {
							Name = "HumanoidRootPart",
							Size = v3(2, 2, 1),
							R15 = {
								HumanoidRootPart = 0
							}
						},
						leftArm = {
							Name = "Left Arm",
							Size = v3(1, 2, 1),
							R15 = {
								LeftHand = -0.85,
								LeftLowerArm = -0.2,
								LeftUpperArm = 0.4
							}
						},
						rightArm = {
							Name = "Right Arm",
							Size = v3(1, 2, 1),
							R15 = {
								RightHand = -0.85,
								RightLowerArm = -0.2,
								RightUpperArm = 0.4
							}
						},
						leftLeg = {
							Name = "Left Leg",
							Size = v3(1, 2, 1),
							R15 = {
								LeftFoot = -0.85,
								LeftLowerLeg = -0.15,
								LeftUpperLeg = 0.6
							}
						},
						rightLeg = {
							Name = "Right Leg",
							Size = v3(1, 2, 1),
							R15 = {
								RightFoot = -0.85,
								RightLowerLeg = -0.15,
								RightUpperLeg = 0.6
							}
						}
					}
					for i, v in pairs(c:GetChildren()) do
						if v:IsA("BasePart") then
							for i1, v1 in pairs(v:GetChildren()) do
								if v1:IsA("Motor6D") then
									v1.Part0 = nil
								end
							end
						end
					end
					part.Archivable = true
					for i, v in pairs(R6parts) do
						local part = part:Clone()
						part:ClearAllChildren()
						part.Name = v.Name
						part.Size = v.Size
						part.CFrame = cfr
						part.Anchored = false
						part.Transparency = 1
						part.CanCollide = false
						for i1, v1 in pairs(v.R15) do
							local R15part = gp(c, i1, "BasePart")
							local att = gp(R15part, "att1_" .. i1, "Attachment")
							if R15part then
								local weld = Instance.new("Weld", R15part)
								weld.Name = "Weld_" .. i1
								weld.Part0 = part
								weld.Part1 = R15part
								weld.C0 = cf(0, v1, 0)
								weld.C1 = cf(0, 0, 0)
								R15part.Massless = true
								R15part.Name = "R15_" .. i1
								R15part.Parent = part
								if att then
									att.Parent = part
									att.Position = v3(0, v1, 0)
								end
							end
						end
						part.Parent = c
						R6parts[i] = part
					end
					local R6joints = {
						neck = {
							Parent = R6parts.torso,
							Name = "Neck",
							Part0 = R6parts.torso,
							Part1 = R6parts.head,
							C0 = cf(0, 1, 0, -1, 0, 0, 0, 0, 1, 0, 1, -0),
							C1 = cf(0, -0.5, 0, -1, 0, 0, 0, 0, 1, 0, 1, -0)
						},
						rootJoint = {
							Parent = R6parts.root,
							Name = "RootJoint" ,
							Part0 = R6parts.root,
							Part1 = R6parts.torso,
							C0 = cf(0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, -0),
							C1 = cf(0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, -0)
						},
						rightShoulder = {
							Parent = R6parts.torso,
							Name = "Right Shoulder",
							Part0 = R6parts.torso,
							Part1 = R6parts.rightArm,
							C0 = cf(1, 0.5, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0),
							C1 = cf(-0.5, 0.5, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0)
						},
						leftShoulder = {
							Parent = R6parts.torso,
							Name = "Left Shoulder",
							Part0 = R6parts.torso,
							Part1 = R6parts.leftArm,
							C0 = cf(-1, 0.5, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0),
							C1 = cf(0.5, 0.5, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0)
						},
						rightHip = {
							Parent = R6parts.torso,
							Name = "Right Hip",
							Part0 = R6parts.torso,
							Part1 = R6parts.rightLeg,
							C0 = cf(1, -1, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0),
							C1 = cf(0.5, 1, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0)
						},
						leftHip = {
							Parent = R6parts.torso,
							Name = "Left Hip" ,
							Part0 = R6parts.torso,
							Part1 = R6parts.leftLeg,
							C0 = cf(-1, -1, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0),
							C1 = cf(-0.5, 1, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0)
						}
					}
					for i, v in pairs(R6joints) do
						local joint = Instance.new("Motor6D")
						for prop, val in pairs(v) do
							joint[prop] = val
						end
						R6joints[i] = joint
					end
					hum1.RigType = Enum.HumanoidRigType.R6
					hum1.HipHeight = 0
				end
			end
		end
	
		local lp = game:GetService("Players").LocalPlayer
	
		local c = lp.Character
		if not (c and c.Parent) then
			return print("character not found")
		end
		c:GetPropertyChangedSignal("Parent"):Connect(function()
			if not (c and c.Parent) then
				c = nil
			end
		end)
	
		--getPart function
	
		local function gp(parent, name, className)
			local ret = nil
			pcall(function()
				for i, v in pairs(parent:GetChildren()) do
					if (v.Name == name) and v:IsA(className) then
						ret = v
						break
					end
				end
			end)
			return ret
		end
	
		--check if reanimate loaded
	
		local model = gp(c, "Model", "Model")
		if not model then return print("model not found") end
	
		--find body parts
	
		local head = gp(c, "Head", "BasePart")
		if not head then return print("head not found") end
	
		local torso = gp(c, "Torso", "BasePart")
		if not torso then return print("torso not found") end
	
		local humanoidRootPart = gp(c, "HumanoidRootPart", "BasePart")
		if not humanoidRootPart then return print("humanoid root part not found") end
	
		local leftArm = gp(c, "Left Arm", "BasePart")
		if not leftArm then return print("left arm not found") end
	
		local rightArm = gp(c, "Right Arm", "BasePart")
		if not rightArm then return print("right arm not found") end
	
		local leftLeg = gp(c, "Left Leg", "BasePart")
		if not leftLeg then return print("left leg not found") end
	
		local rightLeg = gp(c, "Right Leg", "BasePart")
		if not rightLeg then return print("right leg not found") end
	
		--find rig joints
	
		local neck = gp(torso, "Neck", "Motor6D")
		if not neck then return print("neck not found") end
	
		local rootJoint = gp(humanoidRootPart, "RootJoint", "Motor6D")
		if not rootJoint then return print("root joint not found") end
	
		local leftShoulder = gp(torso, "Left Shoulder", "Motor6D")
		if not leftShoulder then return print("left shoulder not found") end
	
		local rightShoulder = gp(torso, "Right Shoulder", "Motor6D")
		if not rightShoulder then return print("right shoulder not found") end
	
		local leftHip = gp(torso, "Left Hip", "Motor6D")
		if not leftHip then return print("left hip not found") end
	
		local rightHip = gp(torso, "Right Hip", "Motor6D")
		if not rightHip then return print("right hip not found") end
	
		--humanoid
	
		local hum = c:FindFirstChildOfClass("Humanoid")
		if not hum then return print("humanoid not found") end
	
		local animate = gp(c, "Animate", "LocalScript")
		if animate then
			animate.Disabled = true
		end
	
		for i, v in pairs(hum:GetPlayingAnimationTracks()) do
			v:Stop()
		end
	
		--60 fps
	
		local fps = 60
		local event = Instance.new("BindableEvent", c)
		event.Name = "60 fps"
		local floor = math.floor
		fps = 1 / fps
		local tf = 0
		local con = nil
		con = game:GetService("RunService").RenderStepped:Connect(function(s)
			if not c then
				con:Disconnect()
				return
			end
			tf += s
			if tf >= fps then
				for i=1, floor(tf / fps) do
					event:Fire(c)
				end
				tf = 0
			end
		end)
		local event = event.Event
	
		local function stopIfRemoved(instance)
			if not (instance and instance.Parent) then
				c = nil
				return
			end
			instance:GetPropertyChangedSignal("Parent"):Connect(function()
				if not (instance and instance.Parent) then
					c = nil
				end
			end)
		end
		stopIfRemoved(c)
		stopIfRemoved(hum)
		for i, v in pairs({head, torso, leftArm, rightArm, leftLeg, rightLeg, humanoidRootPart}) do
			stopIfRemoved(v)
		end
		for i, v in pairs({neck, rootJoint, leftShoulder, rightShoulder, leftHip, rightHip}) do
			stopIfRemoved(v)
		end
		if not c then
			return
		end
		hum.WalkSpeed = 10
		local cf, v3, euler, sin, sine, abs = CFrame.new, Vector3.new, CFrame.fromEulerAnglesXYZ, math.sin, 0, math.abs
		while event:Wait() do
			sine += 1
			local vel = humanoidRootPart.Velocity
			if (vel*v3(1, 0, 1)).Magnitude > 2 then -- walk
				neck.C0 = neck.C0:Lerp(cf(0, 0, 0.5) * euler(0.17453292519943295, 0.03490658503988659 * sin((sine + 2.5) * 0.2), 3.141592653589793 + -0.17453292519943295 * sin((sine + -10) * 0.2)), 0.2) 
				rootJoint.C0 = rootJoint.C0:Lerp(cf(0, -1.5, 0) * euler(3.0543261909900767, 0.08726646259971647 * sin((sine + 7.5) * 0.2), -3.1590459461097367 + -0.08726646259971647 * sin(sine * 0.2)), 0.2) 
				leftShoulder.C0 = leftShoulder.C0:Lerp(cf(-1, 1.5 + 0.5 * sin((sine + 10) * 0.2), 0.3 + 0.2 * sin((sine + -10) * 0.2)) * euler(1.6580627893946132 + 0.17453292519943295 * sin((sine + 15) * 0.2), 0, -0.08726646259971647 * sin(sine * 0.2)), 0.2) 
				rightShoulder.C0 = rightShoulder.C0:Lerp(cf(1, 1.5 + 0.5 * sin((sine + -7.5) * 0.2), 0.3 + 0.2 * sin((sine + 5) * 0.2)) * euler(1.6580627893946132 + 0.17453292519943295 * sin(sine * 0.2), 0, -0.08726646259971647 * sin(sine * 0.2)), 0.2) 
				leftHip.C0 = leftHip.C0:Lerp(cf(-1, -1.5 + 0.5 * sin((sine + -7.5) * 0.2), 0.5 + 0.2 * sin((sine + 5) * 0.2)) * euler(1.6580627893946132 + 0.17453292519943295 * sin(sine * 0.2), 0, -0.08726646259971647 * sin(sine * 0.2)), 0.2) 
				rightHip.C0 = rightHip.C0:Lerp(cf(1, -1.5 + 0.5 * sin((sine + 10) * 0.2), 0.5 + 0.2 * sin((sine + -7.5) * 0.2)) * euler(1.6580627893946132 + -0.17453292519943295 * sin(sine * 0.2), 0, -0.08726646259971647 * sin(sine * 0.2)), 0.2) 
			elseif abs(vel.Y) > 2 then -- fall
				neck.C0 = neck.C0:Lerp(cf(0, 0, 0.5) * euler(0, 0, 3.141592653589793), 0.2) 
				rootJoint.C0 = rootJoint.C0:Lerp(cf(0, -1.4, 0) * euler(3.141592653589793, 0, -3.141592653589793), 0.2) 
				leftShoulder.C0 = leftShoulder.C0:Lerp(cf(-1, 1.5, 0.3) * euler(1.7453292519943295, 0, -0.17453292519943295), 0.2) 
				rightShoulder.C0 = rightShoulder.C0:Lerp(cf(1, 1.5, 0.3) * euler(1.7453292519943295, 0, 0.17453292519943295), 0.2) 
				leftHip.C0 = leftHip.C0:Lerp(cf(-1, -1.5, 0.8) * euler(1.3962634015954636, 0, -0.17453292519943295), 0.2) 
				rightHip.C0 = rightHip.C0:Lerp(cf(1, -1.5, 0.8) * euler(1.3962634015954636, 0, 0.17453292519943295), 0.2) 
			else -- idle
				neck.C0 = neck.C0:Lerp(cf(0, 0, 0.5) * euler(0.08726646259971647 * sin((sine + 20) * 0.05), 0, 3.141592653589793 + 0.3490658503988659 * sin((sine + -30) * 0.025)), 0.2) 
				rootJoint.C0 = rootJoint.C0:Lerp(cf(0, -1.5 + 0.1 * sin(sine * 0.05), 0) * euler(3.141592653589793, 0, -3.1590459461097367 + 0.05235987755982989 * sin(sine * 0.025)), 0.2) 
				leftShoulder.C0 = leftShoulder.C0:Lerp(cf(-1, 1.5, -0.1 * sin(sine * 0.05)) * euler(1.5707963267948966, 0, 0.08726646259971647 * sin(sine * 0.025)), 0.2) 
				rightShoulder.C0 = rightShoulder.C0:Lerp(cf(1, 1.5, -0.1 * sin(sine * 0.05)) * euler(1.5707963267948966, 0, 0.08726646259971647 * sin(sine * 0.025)), 0.2) 
				leftHip.C0 = leftHip.C0:Lerp(cf(-1, -1.5, 0.5 + -0.1 * sin((sine + 10) * 0.05)) * euler(1.5707963267948966, 0, 0.08726646259971647 * sin(sine * 0.025)), 0.2) 
				rightHip.C0 = rightHip.C0:Lerp(cf(1, -1.5, 0.5 + -0.1 * sin((sine + 10) * 0.05)) * euler(1.5707963267948966, 0, 0.08726646259971647 * sin(sine * 0.025)), 0.2) 
			end
		end
	end 
	
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(SJADZN_fake_script)()
local function BVCUG_fake_script() -- ImageButton_2.LocalScript 
	local script = Instance.new('LocalScript', ImageButton_2)

	function OnClicked() 
		for i,v in next, game:GetService("Players").LocalPlayer.Character:GetDescendants() do
			if v:IsA("BasePart") and v.Name ~="HumanoidRootPart" then 
				game:GetService("RunService").Heartbeat:connect(function()
					v.Velocity = Vector3.new(-30,0,0)
				end)
			end
		end
		Bypass = "death"
		loadstring(game:GetObjects("rbxassetid://5325226148")[1].Source)()
	
	
	
	
	
	
		--// SHORTCUTS \\--
		local RNG = (function()
			local RNG = Random.new();
			return function(min,max,int)
				return int and RNG:NextInteger(min,max) or RNG:NextNumber(min,max)
			end;
		end)();
		local S = setmetatable({},{__index = function(s,i) return game:service(i) end})
		local CF = {
			N=CFrame.new;
			A=CFrame.Angles;
			fEA=CFrame.fromEulerAnglesXYZ;
		}
		local C3 = {
			N=Color3.new;
			RGB=Color3.fromRGB;
			HSV=function(...)local data={...}if(typeof(data)=='Color3')then return Color3.toHSV(...)else return Color3.fromHSV(...)end;end;
		}
		local V3 = {
			N=Vector3.new;
			FNI=Vector3.FromNormalId;
			A=Vector3.FromAxis;
		}
		local M = {
			C=math.cos;
			R=math.rad;
			S=math.sin;
			T=math.tan;
			AT=math.atan;
			AT2=math.atan2;
			AS=math.asin;
			AC=math.acos;
			A=math.abs;
			F=math.floor;
			CE=math.ceil;
			P=math.pi;
			RNG=RNG;
			H=math.huge;
			RRNG=function(...) return math.rad(RNG(...)) end
		}
		local R3 = Region3.new
		local De = S.Debris
		local WS = workspace
		local Lght = S.Lighting
		local RepS = S.ReplicatedStorage
		local IN = Instance.new
		local Plrs = S.Players
	
		--// INITIALIZATION \\--
		local Plr = Plrs.LocalPlayer
		print(Plr)
		local Char = game.workspace.non
		local Hum = Char:FindFirstChildOfClass'Humanoid'
		assert(Hum and Hum.RigType==Enum.HumanoidRigType.R6,"You need to have a valid Humanoid instance! (Exising and R6)")
		local Head = Char.Head
		local RArm = Char["Right Arm"]
		local LArm = Char["Left Arm"]
		local RLeg = Char["Right Leg"]
		local LLeg = Char["Left Leg"]	
		local Torso= Char.Torso
		local Root = Char.HumanoidRootPart
		local NeutralAnims = true
		local Attack = false
		local legAnims = true
		local Mouse = Plr:GetMouse()
		local EffectFolder=Instance.new("Folder")
		EffectFolder.Name='Effects'
		EffectFolder.Parent=Char
	
		local Movement = 10
		local Sine = 0;
		local Change = 1;
		local wsVal = 6
	
		--// INSTANCE CREATORS \\--
		local baseSound = IN("Sound")
		function Sound(parent,id,pitch,volume,looped,effect,autoPlay)
			local Sound = baseSound:Clone()
			Sound.SoundId = "rbxassetid://".. tostring(id or 0)
			Sound.Pitch = pitch or 1
			Sound.Volume = volume or 1
			Sound.Looped = looped or false
			if(autoPlay)then
				coroutine.wrap(function()
					repeat wait() until Sound.IsLoaded
					Sound.Playing = autoPlay or false
				end)()
			end
			if(not looped and effect)then
				Sound.Stopped:connect(function()
					Sound.Volume = 0
					Sound:destroy()
				end)
			elseif(effect)then
				warn("Sound can't be looped and a sound effect!")
			end
			Sound.Parent =parent or workspace
			return Sound
		end
		function Part(parent,color,material,size,cframe,anchored,cancollide)
			local part = IN("Part")
			part[typeof(color) == 'BrickColor' and 'BrickColor' or 'Color'] = color or C3.N(0,0,0)
			part.Material = material or Enum.Material.SmoothPlastic
			part.TopSurface,part.BottomSurface=10,10
			part.Size = size or V3.N(1,1,1)
			part.CFrame = cframe or CF.N(0,0,0)
			part.CanCollide = cancollide or false
			part.Anchored = anchored or false
			part.Parent = parent
			return part
		end
	
		function Weld(part0,part1,c0,c1)
			local weld = IN("Weld")
			weld.Part0 = part0
			weld.Part1 = part1
			weld.C0 = c0 or CF.N()
			weld.C1 = c1 or CF.N()
			weld.Parent = part0
			return weld
		end
	
		function Mesh(parent,meshtype,meshid,textid,scale,offset)
			local part = IN("SpecialMesh")
			part.MeshId = meshid or ""
			part.TextureId = textid or ""
			part.Scale = scale or V3.N(1,1,1)
			part.Offset = offset or V3.N(0,0,0)
			part.MeshType = meshtype or Enum.MeshType.Sphere
			part.Parent = parent
			return part
		end
	
		function SoundPart(id,pitch,volume,looped,effect,autoPlay,cf)
			local soundPart = Part(EffectFolder,C3.N(1,1,1),Enum.Material.SmoothPlastic,V3.N(.05,.05,.05),cf,true,false)
			soundPart.Transparency=1
			local Sound = IN("Sound")
			Sound.SoundId = "rbxassetid://".. tostring(id or 0)
			Sound.Pitch = pitch or 1
			Sound.Volume = volume or 1
			Sound.Looped = looped or false
			if(autoPlay)then
				coroutine.wrap(function()
					repeat wait() until Sound.IsLoaded
					Sound.Playing = autoPlay or false
				end)()
			end
			if(not looped and effect)then
				Sound.Stopped:connect(function()
					Sound.Volume = 0
					soundPart:destroy()
				end)
			elseif(effect)then
				warn("Sound can't be looped and a sound effect!")
			end
			Sound.Parent = soundPart
			return Sound
		end
	
		function Joint(name,part0,part1,c0,c1,type)
			local joint = IN(type or "Motor6D")
			joint.Part0 = part0
			joint.Part1 = part1
			joint.C0 = c0 or CF.N()
			joint.C1 = c1 or CF.N()
			joint.Parent=part0
			joint.Name=name or part0.." to "..part1.." "..joint.ClassName
			return joint
		end
	
		function Animate(joint,c0,alpha,style,dir)
			if(style=='Lerp')then
				joint.C0 = joint.C0:lerp(c0,alpha)
			else
				local info = TweenInfo.new(alpha or 1,style or Enum.EasingStyle.Linear,dir or Enum.EasingDirection.Out,0,false,0)
				local tween = S.TweenService:Create(joint,info,{C0=c0})
				tween:Play();
				return tween;
			end
		end
	
		function NewInstance(instance,parent,properties)if(properties.Parent)then properties.Parent=parent end;local new = IN(instance)if(properties)then for prop,val in next, properties do pcall(function() new[prop]=val end)end;end;new.Parent=parent;return new;end
	
		function GetAdjacentParts(part)
			local function createLargerHitbox(part)
				local n = 0.2
				local clone = part:Clone()
	
				clone.Transparency = .8
				clone.BrickColor = BrickColor.Red()
				clone.Size = clone.Size + Vector3.new(n, n, n)
				clone.Name = "hitbox"
				clone.CFrame = part.CFrame
				clone.Anchored=true
				clone.CanCollide=true
	
				if (clone:IsA("WedgePart")) then
					clone.Size = clone.Size + Vector3.new(0, n, n)
					clone.CFrame = part.CFrame * CFrame.new(0, n / 2, -n /2)
				end
	
				if (clone:IsA("CornerWedgePart")) then
					clone.Size = clone.Size + Vector3.new(n, n, n)
					clone.CFrame = part.CFrame * CFrame.new(-n / 2, n / 2, n / 2)
				end
				clone.Parent = part
	
				return clone
			end
	
			local hitbox = createLargerHitbox(part)
			local touchingParts = hitbox:getTouchingParts()
			hitbox:Destroy()
	
			return (function()
				local adjacent={}
				for _,v in next, touchingParts do if(v~=part)then table.insert(adjacent,v)end;end
				return adjacent;
			end)()
		end
		--// CUSTOMIZABLE VARIABLES \\--
	
		local DamageColor = BrickColor.new'Really red';
		local MusicData = {Parent=Torso,ID=2666435584;Pitch=1;Volume=5;}
		local God = false
		local WalkSpeed = 50
	
		local Music = Sound(MusicData.Parent,MusicData.ID,MusicData.Pitch,MusicData.Volume,true,false,true)
		Music.Name = 'Music'
	
		--// JOINTS \\--
	
		local RJ = Joint("RootJoint",Root,Torso,CF.N(),CF.N())
		local NK = Joint("Neck",Torso,Head,CF.N(0,1.5,0),CF.N())
		local LS = Joint("Left Shoulder",Torso,LArm,CF.N(-.5,-2,0),CF.N(0,.5,0))
		local RS = Joint("Right Shoulder",Torso,RArm,CF.N(.5,-2,0),CF.N(0,.5,0))
		local LH = Joint("Left Hip",Torso,LLeg,CF.N(0,0,0),CF.N(0,0,0))
		local RH = Joint("Right Hip",Torso,RLeg,CF.N(0,0,0),CF.N(0,0,0))
	
		--Torso.Anchored = true
	
		local LSC0 = LS.C0
		local RSC0 = RS.C0
		local NKC0 = NK.C0
		local LHC0 = LH.C0
		local RHC0 = RH.C0
		local RJC0 = RJ.C0
	
		--// Artificial HB \\--
	
		local ArtificialHB = IN("BindableEvent", script)
		ArtificialHB.Name = "Heartbeat"
	
		script:WaitForChild("Heartbeat")
	
		local tf = 0
		local allowframeloss = false
		local tossremainder = false
		local lastframe = tick()
		local frame = 1/60
		ArtificialHB:Fire()
	
		game:GetService("RunService").Heartbeat:connect(function(s, p)
			tf = tf + s
			if tf >= frame then
				if allowframeloss then
					script.Heartbeat:Fire()
					lastframe = tick()
				else
					for i = 1, math.floor(tf / frame) do
						ArtificialHB:Fire()
					end
					lastframe = tick()
				end
				if tossremainder then
					tf = 0
				else
					tf = tf - frame * math.floor(tf / frame)
				end
			end
		end)
	
		function swait(num)
			if num == 0 or num == nil then
				ArtificialHB.Event:wait()
			else
				for i = 0, num do
					ArtificialHB.Event:wait()
				end
			end
		end
	
		--// STOP ANIMATIONS \\--
		for _,v in next, Hum:GetPlayingAnimationTracks() do
			v:Stop();
		end
	
		pcall(game.Destroy,Char:FindFirstChild'Animate')
		pcall(game.Destroy,Hum:FindFirstChild'Animator')
	
		--// EFFECT FUNCTIONS \\--
	
	
	
		local fromaxisangle = function(x, y, z) -- credit to phantom forces devs
			if not y then
				x, y, z = x.x, x.y, x.z
			end
			local m = (x * x + y * y + z * z) ^ 0.5
			if m > 1.0E-5 then
				local si = math.sin(m / 2) / m
				return CFrame.new(0, 0, 0, si * x, si * y, si * z, math.cos(m / 2))
			else
				return CFrame.new()
			end
		end
	
		function fakePhysics(elapsed,cframe,velocity,rotation,acceleration)
			local pos = cframe.p
			local matrix = cframe-pos
			return fromaxisangle(elapsed*rotation)*matrix+pos+elapsed*velocity+elapsed*elapsed*acceleration
		end
	
		function CastRay(startPos,endPos,range,ignoreList)
			local ray = Ray.new(startPos,(endPos-startPos).unit*range)
			local part,pos,norm = workspace:FindPartOnRayWithIgnoreList(ray,ignoreList or {},false,true)
			return part,pos,norm,(pos and (startPos-pos).magnitude)
		end
	
		function GetTorso(char)
			return char:FindFirstChild'Torso' or char:FindFirstChild'UpperTorso' or char:FindFirstChild'LowerTorso' or char:FindFirstChild'HumanoidRootPart'
		end
	
		function Projectile(data)
			local Size = data.Size or 1;
			local Origin = data.Origin or CFrame.new();
			local Velocity = data.Velocity or Vector3.new(0,100,0);
			local Gravity = data.Gravity or workspace.Gravity;
			local Color = data.Color or Color3.new(.7,0,0);
			local Lifetime = data.Lifetime or 1;
			local Material = data.Material or Enum.Material.Glass;
			local ignore = data.Ignorelist or {Char};
			local Init = data.Init;
			local Update = data.Update;
			local HitFunc = data.Hit;
			local ShouldCollide = data.BeforeCollision;
			local DeleteOnHit = not not data.DeleteOnHit;
			local ProjectilePart = data.Projectile or nil;
			local Look = data.AimAtPos or false;
			local drop = ProjectilePart or Part(nil,Color,Material,Vector3.new(Size,Size,Size),Origin,true,false)
			local StartTravel = tick()
			local currCF = data.Origin
			if(not ProjectilePart)then
				Mesh(drop,Enum.MeshType.Sphere)
				drop.Parent=EffectFolder
			end
			drop.Material = Material
			drop.Color = Color
			drop.CFrame=Origin
			local object=setmetatable({Part=drop},{
				__newindex=function(s,i,v)
					if(i=='Gravity')then StartTravel = tick() data.Origin = currCF Origin=currCF data.Gravity = v Gravity=v
					elseif(i=='Velocity')then StartTravel = tick() data.Origin = currCF Origin=currCF data.Velocity = v Velocity=v
					elseif(i=='Lifetime')then data.Lifetime = v Lifetime=v 
					elseif(i=='Ignorelist')then data.Ignorelist = v ignore=v
					elseif(i=='DeleteOnHit')then data.DeleteOnHit = v DeleteOnHit=v 
					else
						pcall(function()
							drop[i]=v
						end)
					end
				end;
				__index=data;
			})
	
	
			if(Init)then
				Init(drop)
			end
			local startTick = tick();
			coroutine.wrap(function()
				while true do
					local elapsed = tick()-startTick
					local trElapsed = tick()-StartTravel
					if(elapsed>Lifetime)then
						drop:destroy();
						break
					end
					local newCF = fakePhysics(trElapsed,Origin,Velocity,Vector3.new(),Vector3.new(0,-Gravity,0))
					local nextCF = fakePhysics(trElapsed+.05,Origin,Velocity,Vector3.new(),Vector3.new(0,-Gravity,0))
					local dist = (drop.Position-newCF.p).magnitude
					local hit,pos,norm = CastRay(drop.Position,newCF.p,dist,ignore)
					currCF=newCF
					local doCollide = hit and (GetTorso(hit.Parent) or hit.CanCollide) and (not ShouldCollide or ShouldCollide(hit))
					if(hit and not doCollide)then table.insert(ignore,hit) end
					if(Look)then
						drop.CFrame = CFrame.new(newCF.p,nextCF.p)
					else
						drop.CFrame = CFrame.new(newCF.p)
					end
					if(Update)then Update(drop,object,elapsed) end
					if(doCollide)then
						if(DeleteOnHit or not HitFunc)then drop:destroy() end
						if(HitFunc)then if(HitFunc(hit,pos,norm,object,drop))then break end end
					end
					if(not drop.Parent)then
						break
					end
					swait()
				end
			end)()
			return object
		end
	
		function Chat(txt,timer,clr)
			if(Head:FindFirstChild'Chattie' and Head.Chattie:FindFirstChild'Killchat')then
				Head.Chattie.Killchat.Value=true
			elseif(Head:FindFirstChild'Chattie')then
				Head.Chattie:destroy()
			end
			local nig = V3.N(0,0,0)
			local clr = (typeof(clr)=='BrickColor' and clr.Color or typeof(clr)=='Color3' and clr or C3.N(1,1,1))
			local bg = NewInstance("BillboardGui",Head,{
				Name='Chattie';
				Adornee=Head;
				LightInfluence=0;
				Size=UDim2.new(4,0,2,0);
			})
			local dismiss = NewInstance("BoolValue",bg,{
				Name='Killchat';
			})
	
			local text = NewInstance("TextLabel",bg,{
				BackgroundTransparency=1;
				Size=UDim2.new(1,0,1,0);
				Font=Enum.Font.Fantasy;
				Text=txt;
				TextColor3=clr;
				TextStrokeColor3=C3.N(0,0,0);
				TextScaled=true;
				TextTransparency=0;
				TextStrokeTransparency=.5;
			})
			coroutine.wrap(function()
				for i = 1, 0, -.02 do
					bg.StudsOffsetWorldSpace=nig:lerp(nig+V3.N(0,3,0),EasingFunctions.outBack(1-i,0,1,1,6))
					if(dismiss.Value)then break end
					swait()
				end
				local start = tick()
				nig=bg.StudsOffsetWorldSpace
				repeat swait() until dismiss.Value or tick()-start>=timer
				bg.Name='DismissingChat'
				for i = 0, 1, .05 do
					bg.StudsOffsetWorldSpace=nig:lerp(nig+V3.N(0,2,0),EasingFunctions.linear(i,0,1,1))
					text.TextTransparency=i;
					text.TextStrokeTransparency=.5+i/2;
					swait()
				end
				bg:destroy()
			end)()
		end
	
		function ShowDamage(pos,txt,timer,clr)
			local nig = typeof(pos)=='Vector3' and CF.N(pos) or pos
			local part = Part(EffectFolder,clr,Enum.Material.SmoothPlastic,V3.N(.05,.05,.05),nig,true,false)
			part.Transparency=1
			local bg = NewInstance("BillboardGui",part,{
				Adornee=part;
				LightInfluence=0;
				Size=UDim2.new(2,0,1,0);
			})
			local text = NewInstance("TextLabel",bg,{
				BackgroundTransparency=1;
				Size=UDim2.new(1,0,1,0);
				Font=Enum.Font.Fantasy;
				Text=txt;
				TextColor3=part.Color;
				TextStrokeColor3=C3.N(0,0,0);
				TextScaled=true;
				TextTransparency=1;
				TextStrokeTransparency=1;
			})
			coroutine.wrap(function()
				for i = 1, 0, -.02 do
					part.CFrame=nig:lerp(nig+V3.N(0,3,0),EasingFunctions.outBack(1-i,0,1,1,6))
					text.TextTransparency=i;
					text.TextTransparency=text.TextTransparency-.02;
					text.TextStrokeTransparency=text.TextStrokeTransparency-.01;
					swait()
				end
				local start = tick()
				repeat swait() until tick()-start>=timer
				local endRot=M.RNG(-25,25)
				for i = 0, 1, .02 do
					part.CFrame=(nig+V3.N(0,3,0)):lerp(nig+V3.N(0,-10,0),EasingFunctions.inBack(i,0,1,1,6))
					text.TextTransparency=i;
					text.TextTransparency=text.TextTransparency+.02;
					text.TextStrokeTransparency=text.TextStrokeTransparency+.01;
					swait()
				end
				part:destroy()
			end)()
		end
	
		function CamshakePlayer(p,settings)
			local sh = script:WaitForChild'CamShake':Clone()	
			local optionFolder = sh:WaitForChild'Options'
			for _,v in next, optionFolder:children() do
				if(settings[v.Name])then
					v.Value=settings[v.Name]
				end
			end
			local originVal;
			if(typeof(settings.Origin)=='Vector3')then
				originVal=IN("Vector3Value")
			elseif(typeof(settings.Origin)=='CFrame')then
				originVal=IN("CFrameValue")
			elseif(typeof(settings.Origin)=='Instance')then
				originVal=IN("ObjectValue")
			end
			if(originVal)then
				originVal.Name = 'Origin'
				originVal.Value = settings.Origin
				originVal.Parent=optionFolder
			end
			local parent = p.Character or p:FindFirstChildOfClass'Backpack' or p:FindFirstChildOfClass'PlayerGui'
			if(parent)then
				local nig = sh:Clone();
				nig.Parent=parent
				nig.Disabled=false
				S.Debris:AddItem(nig,(settings.Duration or 2)+1)
			end
		end
	
		function Camshake(settings)
			for _,p in next, game:service'Players':players() do
				CamshakePlayer(p,settings)
			end
		end
		function Tween(object,properties,time,style,dir,repeats,reverse,delay)
			local info = TweenInfo.new(time or 1,style or Enum.EasingStyle.Linear,dir or Enum.EasingDirection.Out,repeats or 0,reverse or false,delay or 0)
			local tween = S.TweenService:Create(object,info,properties)
			tween:Play()
			return tween;
		end
	
		local function numLerp(Start,Finish,Alpha)
			return Start + (Finish- Start) * Alpha
		end
		function IsValidEnum(val,enum,def)
			local enum = Enum[tostring(enum)]
			local succ,err=pcall(function() return enum[val.Name] end)
			if(not err)then
				return val
			else
				return def
			end
		end
	
		function IsValid(val,type,def)
			if(typeof(type)=='string')then
				return (typeof(val)==type and val or def)
			elseif(typeof(type)=='table')then
				for i,v in next, type do
					if(typeof(val)==v)then
						return val
					end
				end
			end
			return def
		end
	
		local FXInformation = {}
		function EffectFunc(data)
			if(typeof(data)=='Instance' and data:IsA'ModuleScript')then	data=require(data)end
			assert(typeof(data)=='table',"Expected 'table' calling EffectFunc")
			data.Parent=EffectFolder
			if(data.BeamEffect)then
				return Slash(data)
			end
	
			local Lifetime = data.Lifetime or 1;
			local Color = data.Color or Color3.new(1,1,1)
			local EndColor = data.EndColor
			local Size = data.Size or Vector3.new(1,1,1)
			local EndSize = data.EndSize
			local Transparency = data.Transparency or 0
			local EndTransparency = data.EndTransparency or 1
			local Material = data.Material or Enum.Material.Neon;
			local Part = typeof(data.RefPart)=='Instance' and data.RefPart or typeof(data.RefPart)=='string' and FXFolder:FindFirstChild(data.RefPart);
			local CF = data.CFrame or CFrame.new(0,10,0)
			local EndCF = data.EndCFrame or data.EndPos
			local Mesh = data.MeshData or data.Mesh or {MeshType=Enum.MeshType.Brick}
			local Rotation = data.Rotation or {0,0,0}
			local UpdateCF = data.UpdateCFrame;
			local Update = data.Update;
	
			local CSQ,SSQ,TSQ,CFQ;
			if(typeof(Color)=='BrickColor')then Color = Color.Color end
			if(typeof(EndColor)=='BrickColor')then EndColor = EndColor.Color end
			if(typeof(Color)=='ColorSequence')then
				CSQ = Color
			elseif(typeof(Color)=='Color3' and typeof(EndColor)=='Color3')then
				CSQ = ColorSequence.new(Color,EndColor)
			elseif(typeof(Color)=='Color3')then
				CSQ = ColorSequence.new(Color)
			else
				CSQ = ColorSequence.new(Color3.new(1,1,1))
			end
	
	
			if(typeof(Size)=='table' and Size.Keypoints and typeof(Size.Keypoints[1].Value)=='Vector3')then
				SSQ = Size
			elseif(typeof(Size)=='Vector3' and typeof(EndSize)=='Vector3')then
				SSQ = Vector3Sequence.new(Size,EndSize)
			elseif(typeof(Size)=='Vector3')then
				SSQ = Vector3Sequence.new(Size)
			else
				SSQ = Vector3Sequence.new(Vector3.new(1,1,1))
			end
	
			if(typeof(CF)=='table' and CF.Keypoints and typeof(CF.Keypoints[1].Value)=='CFrame')then
				CFQ = CF
			elseif(typeof(CF)=='CFrame' and typeof(EndCF)=='CFrame')then
				CFQ = CFrameSequence.new(CF,EndCF)
			elseif(typeof(CF)=='CFrame')then
				CFQ = CFrameSequence.new(CF)
			else
				CFQ = CFrameSequence.new(CFrame.new(0,10,0))
			end
	
			if(typeof(Transparency)=='NumberSequence')then
				TSQ = Transparency
			elseif(typeof(Transparency)=='number' and typeof(EndTransparency)=='number')then
				TSQ = NumberSequence.new(Transparency,EndTransparency)
			elseif(typeof(Transparency)=='number')then
				TSQ = NumberSequence.new(Transparency)
			else
				TSQ = NumberSequence.new(0,1)
			end
	
	
			local part,mesh;
			if(not Part or not Part:IsA'BasePart')then
				part = Instance.new("Part")
				mesh = Instance.new("SpecialMesh",part)
			else
				part=Part:Clone();
				mesh=part:FindFirstChildOfClass'DataModelMesh'
			end
			part.Color = CSQ.Keypoints[1].Value
			part.Transparency = TSQ.Keypoints[1].Value
			part.Size = (not mesh and SSQ.Keypoints[1].Value or Vector3.new(1,1,1))
			part.Anchored = true
			part.CanCollide = false
			part.CFrame = CFQ.Keypoints[1].Value
			part.Material = Material
			part.Locked = true
			part.Parent = EffectFolder
			if(mesh)then
				mesh.Scale = SSQ.Keypoints[1].Value
				mesh.MeshType = Mesh.MeshType or Mesh.Type or Enum.MeshType.Brick
				mesh.MeshId = Mesh.MeshId or Mesh.Id or ""
				mesh.TextureId = Mesh.TextureId or Mesh.Texture or ""
			end
			game:service'Debris':AddItem(part,Lifetime*1.5)
			table.insert(FXInformation,{
				Part=part;
				Mesh=mesh;
				Lifetime=Lifetime;
				Create=tick();
				ColorSeq=CSQ;
				SizeSeq=SSQ;
				TranSeq=TSQ;
				CFSeq=CFQ;
				ColorPoint=CSQ.Keypoints[1];
				SizePoint=SSQ.Keypoints[1];
				TranPoint=TSQ.Keypoints[1];
				CFPoint=CFQ.Keypoints[1];
				Rotation=Rotation;
				CurrRot=CFrame.new();
				UpdateCF=(typeof(UpdateCF)=='function' and UpdateCF or typeof(UpdateCF)=='Instance' and UpdateCF:IsA'ModuleScript' and require(UpdateCF) or nil);
				OnUpdate=(typeof(Update)=='function' and Update or typeof(Update)=='Instance' and Update:IsA'ModuleScript' and require(Update) or nil)
			})
		end
	
		function GetKeyframe(sequence,currentTime,lifeTime)
			local scale = currentTime/lifeTime
			for i = 1,#sequence.Keypoints do
				local keyframe = sequence.Keypoints[i]
				local nframe = sequence.Keypoints[i+1]
				if(not nframe or keyframe.Time>=scale and keyframe.Time<nframe.Time)then
					return keyframe
				end
			end
			return sequence.Keypoints[1];
		end;
	
		coroutine.wrap(function()
			while true do
				swait()
				local queue={}
				for i,dat in next, FXInformation do
					local part,mesh,lifetime,created,csq,ssq,tsq,cfq,rot,ucf,upd = 
						dat.Part,
					dat.Mesh,
					dat.Lifetime,
					dat.Create,
					dat.ColorSeq,
					dat.SizeSeq,
					dat.TranSeq,
					dat.CFSeq,
					dat.Rotation,
					dat.UpdateCF,
					dat.OnUpdate;
					local current = tick();
					local elapsed = tick()-created
					local currentcpoint = GetKeyframe(csq,elapsed,lifetime)
					local currentspoint = GetKeyframe(ssq,elapsed,lifetime)
					local currenttpoint = GetKeyframe(tsq,elapsed,lifetime)
					local currentcfpoint = GetKeyframe(cfq,elapsed,lifetime)
	
					local currentcolor = currentcpoint.Value
					local currenttrans = currenttpoint.Value
					local currentsize = currentspoint.Value
					local currentcf = currentcfpoint.Value
	
					if(currentcpoint~=dat.ColorPoint)then
						Tween(part,{Color=currentcolor},(currentcpoint.Time-dat.ColorPoint.Time)*lifetime)
						dat.ColorPoint=currentcpoint
					end
					if(currenttpoint~=dat.TranPoint)then
						Tween(part,{Transparency=currenttrans},(currenttpoint.Time-dat.TranPoint.Time)*lifetime)
						dat.TranPoint=currenttpoint
					end
					if(currentspoint~=dat.SizePoint)then
						if(mesh)then
							Tween(mesh,{Scale=currentsize},(currentspoint.Time-dat.SizePoint.Time)*lifetime)
						else
							Tween(part,{Size=currentsize},(currentspoint.Time-dat.SizePoint.Time)*lifetime)
						end
	
						dat.SizePoint=currentspoint
					end
					local newRot={0,0,0}
					if(rot=='random')then
						dat.CurrRot = CFrame.Angles(math.rad(Random.new():NextInteger(0,360)),math.rad(Random.new():NextInteger(0,360)),math.rad(Random.new():NextInteger(0,360)))
					elseif(typeof(rot)=='table')then
						dat.CurrRot = dat.CurrRot*CFrame.Angles(math.rad(rot[1]),math.rad(rot[2]),math.rad(rot[3]))
					end
					if(ucf and typeof(ucf)=='function')then
						part.CFrame=ucf(dat)
					elseif(#cfq.Keypoints==2)then
						part.CFrame=cfq.Keypoints[1].Value:lerp(cfq.Keypoints[2].Value,elapsed/lifetime)*dat.CurrRot
					else
						if(currentcfpoint~=dat.CFPoint)then
							Tween(part,{CFrame=currentcf},(currentcfpoint.Time-dat.CFPoint.Time)*lifetime)
							dat.CFPoint=currentcfpoint
						end
					end
					if(typeof(upd)=='function')then upd(dat) end
					if(not part or not part.Parent)then
						table.insert(queue,tostring(i))
					end
					if(elapsed>=lifetime)then
						part:destroy()
					end
				end
				for _,v in next, queue do FXInformation[tonumber(v)]=nil; end
			end
		end)()
	
		function Slash(data) -- Credit to Kyu for the basic idea behind it
			local Parent = IsValid(data.Parent,'Instance',workspace)
			local Color = IsValid(data.Color,{'Color3','BrickColor'},Color3.new(1,1,1))
			local Width = IsValid(data.Width,'number',2);
			local EndWidth = IsValid(data.EndWidth,'number',0);
			local Length = IsValid(data.Length,'number',1);
			local EndLength = IsValid(data.EndLength,'number',Length*2);
			local Curve = IsValid(data.Curve,"number",2);
			local EndCurve = IsValid(data.EndCurve,"number",Curve*2);
			local SCFrame = IsValid(data.CFrame,'CFrame',CFrame.new(0,10,0))
			local Lifetime = IsValid(data.Lifetime,'number',.25)
			local Offset = IsValid(data.Offset,'CFrame',CFrame.new())
			local Style = IsValidEnum(IsValid(data.EasingStyle,'EnumItem',Enum.EasingStyle.Quad),Enum.EasingStyle,Enum.EasingStyle.Quad)
			local Direction = IsValidEnum(IsValid(data.EasingDirection,'EnumItem',Enum.EasingDirection.Out),Enum.EasingDirection,Enum.EasingDirection.Out)
			local Delay = IsValid(data.Delay,'number',0)
			local BeamProperties = IsValid(data.BeamProps,'table',{})
			local FadeAway = IsValid(data.Fades,'boolean',false)
			local FadeStyle = IsValidEnum(IsValid(data.FadeStyle,'EnumItem',Enum.EasingStyle.Linear),Enum.EasingStyle,Enum.EasingStyle.Linear)
			local FadeDir = IsValidEnum(IsValid(data.FadeDirection,'EnumItem',Enum.EasingDirection.Out),Enum.EasingDirection,Enum.EasingDirection.Out)
			local CSQ;
			local TSQ;
			if(typeof(Color)=='ColorSequence')then
				CSQ = Color
			elseif(typeof(Color)=='Color3')then
				CSQ = ColorSequence.new(Color)
			elseif(typeof(Color)=='BrickColor')then
				CSQ = ColorSequence.new(Color.Color)
			else
				CSQ = ColorSequence.new(Color3.new(1,1,1))
			end
	
			local P = Part(Parent,Color,Enum.Material.SmoothPlastic,Vector3.new(0,0,0),SCFrame,true,false)
			P.Transparency = 1
			local A0 = Instance.new("Attachment")
			local A1 = Instance.new("Attachment")
			A0.Position = Vector3.new(0,0,Length)
			A1.Position = Vector3.new(0,0,-Length)
			A0.Parent=P
			A1.Parent=P
			local Beam = Instance.new("Beam")
			Beam.Attachment0=A0
			Beam.Attachment1=A1
			Beam.FaceCamera=true
			Beam.LightInfluence=BeamProperties.LightInfluence or 0
			Beam.LightEmission=BeamProperties.LightEmission or 1
			for i,v in next, BeamProperties do
				pcall(function() Beam[i]=v end)
			end
			Beam.Color = CSQ
			Beam.CurveSize0 = Curve
			Beam.CurveSize1 = -Curve
			Beam.Width0=Width
			Beam.Width1=Width
			Beam.Parent=P
			local ti = {Lifetime,Style,Direction,0,false,Delay}
			Tween(P,{CFrame = SCFrame*Offset},unpack(ti))
			Tween(Beam,{Width0=EndWidth,Width1=EndWidth,CurveSize0=EndCurve,CurveSize1=-EndCurve},unpack(ti))
			Tween(A0,{Position=Vector3.new(0,0,EndLength)},unpack(ti))
			Tween(A1,{Position=Vector3.new(0,0,-EndLength)},unpack(ti)).Completed:connect(function() P:destroy() end)
			if(FadeAway)then
				local part = Instance.new("Part")
				part.Transparency = Beam.Transparency.Keypoints[1].Value or 0
				Tween(part,{Transparency=1},Lifetime,FadeStyle,FadeDir,0,false,Delay)
				repeat swait()
					Beam.Transparency=NumberSequence.new(part.Transparency)
				until not P.Parent
			end
		end
	
		local EffectInfo={}
		function Effect(data)
			local color = data.Color or Color3.new(1,1,1);
			local transparency = data.Transparency or {0,1}
			local lifetime = data.Lifetime or 1
			local cframe = data.CFrame or CFrame.new(0,10,0)
			local acceleration = data.Acceleration or Vector3.new(0,0,0)
			local endpos = data.EndPos
			local rotation = data.Rotation or {0,0,0}
			local meshData = data.Mesh or {Type=Enum.MeshType.Brick}
			local size = data.Size or Vector3.new(1,1,1)
			local material = data.Material or Enum.Material.Neon
			local setpart = typeof(data.Part)=='string' and FXFolder:FindFirstChild(tostring(data.Part)):Clone() or typeof(data.Part)=='Instance' and data.Part or nil
			local endSize = data.EndSize or size
			local reverse = data.Reverse or 0
			local sizeTween = data.TweenSize and EasingFunctions[data.TweenSize];
			local moveTween = data.TweenPos and EasingFunctions[data.TweenPos];
			local transTween = data.TweenTrans and EasingFunctions[data.TweenTrans];
			local accelTween = data.TweenAccel and EasingFunctions[data.TweenAccel];
			if(endSize and typeof(size)=='Vector3')then size={size,endSize} end
			if(typeof(size)=='Vector3')then size={size,size}end
			if(typeof(transparency)=='number')then transparency={transparency,transparency} end
			if(typeof(color)=='BrickColor')then color=color.Color end
	
			local PM;
	
			local part = setpart or Part(nil,color,material,Vector3.new(1,1,1),cframe,true,false)
	
			if(not part:IsA'MeshPart' and not part:IsA'UnionOperation')then
				local scale = size[1]
				if(meshData == "Blast")then
					PM = Mesh(part,Enum.MeshType.FileMesh,'rbxassetid://20329976','',scale,Vector3.new(0,0,-scale.X/8))
				elseif(meshData == 'Ring')then
					PM = Mesh(part,Enum.MeshType.FileMesh,'rbxassetid://559831844','',scale,Vector3.new(0,0,0))
				elseif(meshData == 'Slash1')then
					PM = Mesh(part,Enum.MeshType.FileMesh,'rbxassetid://662586858','',Vector3.new(scale.X/10,.001,scale.Z/10),Vector3.new(0,0,0))
				elseif(meshData == 'Slash2')then
					PM = Mesh(part,Enum.MeshType.FileMesh,'rbxassetid://448386996','',Vector3.new(scale.X/1000,scale.Y/100,scale.Z/100),Vector3.new(0,0,0))
				elseif(meshData == 'Tornado1')then
					PM = Mesh(part,Enum.MeshType.FileMesh,'rbxassetid://443529437','',scale/10,Vector3.new(0,0,0))
				elseif(meshData == 'Tornado2')then
					PM = Mesh(part,Enum.MeshType.FileMesh,'rbxassetid://168892432','',scale/4,Vector3.new(0,0,0))
				elseif(meshData == 'Skull')then
					PM = Mesh(part,Enum.MeshType.FileMesh,'rbxassetid://4770583','',scale*2,Vector3.new(0,0,0))
				elseif(meshData == 'Crystal')then
					PM = Mesh(part,Enum.MeshType.FileMesh,'rbxassetid://9756362','',scale,Vector3.new(0,0,0))
				elseif(meshData == 'Cloud')then
					PM = Mesh(part,Enum.MeshType.FileMesh,'rbxassetid://1095708','',scale,Vector3.new(0,0,0))
				elseif(typeof(meshData) == 'table' or typeof(meshData) == 'Instance')then
					local Type = meshData.MeshType or meshData.Type or Enum.MeshType.Brick
					local ID = meshData.MeshId or meshData.Mesh or '';
					local Tex = meshData.TextureId or meshData.Texture or '';
					local Offset = meshData.Offset or Vector3.new(0,0,0)
					PM = Mesh(part,Type,ID,Tex,scale,Offset)
				elseif(not part:FindFirstChildOfClass('DataModelMesh'))then
					PM = Mesh(part,Enum.MeshType.Brick,'','',scale)
				else
					PM = part:FindFirstChildOfClass('DataModelMesh')
				end
			end
	
	
			part.Material = material
			part.CFrame = cframe
			part.Color = color
			part.Anchored = true
			part.CanCollide = false
			part.Transparency = transparency[1]
			part.Size = (PM and Vector3.new(1,1,1) or size[1])
			part.Parent = EffectFolder
	
			local start = tick()
			local t0 = tick()
			local t01 = tick()
			local lastTrans='Nil';
			local lastSize='Nil';
			local lastColor='Nil';
			local info = {start,lifetime,t0,transTween,sizeTween,moveTween,accelTween,color,transparency,size,part,PM,rotation,acceleration,endpos,cframe,reverse,acceleration}
			table.insert(EffectInfo,info)
		end
	
		coroutine.wrap(function()
			while true do
				swait()
				for i,v in next, EffectInfo do
					local start,lifetime,t0,transTween,sizeTween,moveTween,accelTween,color,transparency,size,part,mesh,rotation,acceleration,endpos,cframe,reverse,startacc=unpack(v)
					local elapsed = tick()-start
					local left = elapsed/lifetime
					local dt = tick()-t0
					t0 = tick()
					if(mesh)then
						mesh.Scale = size[1]:lerp(size[2],(sizeTween and sizeTween(elapsed,0,1,lifetime) or left))
					else
						part.Size = size[1]:lerp(size[2],(sizeTween and sizeTween(elapsed,0,1,lifetime) or left))
					end
					part.Transparency = numLerp(transparency[1],transparency[2],(transTween and transTween(elapsed,0,1,lifetime) or left))
	
					local newRot={0,0,0}
					if(rotation=='random')then
						newRot={math.rad(Random.new():NextInteger(0,360)),math.rad(Random.new():NextInteger(0,360)),math.rad(Random.new():NextInteger(0,360))}
					elseif(typeof(rotation)=='table')then
						local x,y,z=math.rad(rotation[1]),math.rad(rotation[2]),math.rad(rotation[3])
						if(rotation[1]==0)then x=0 end
						if(rotation[2]==0)then y=0 end
						if(rotation[3]==0)then z=0 end
						newRot={x,y,z}
					end
	
					local accelMult=(accelTween and 1-accelTween(elapsed,0,1,lifetime) or 1)
	
					local accel=(acceleration*dt)
					if(endpos)then
						part.CFrame = cframe:lerp(endpos,(moveTween and moveTween(elapsed,0,1,lifetime) or left))
					elseif(accel and (accel.x~=0 or accel.y~=0 or accel.z~=0))then
						part.CFrame = part.CFrame*CFrame.Angles(unpack(newRot))+(accel*accelMult)
					elseif(newRot and (newRot[1]~=0 or newRot[2]~=0 or newRot[3]~=0))then
						part.CFrame = part.CFrame*CFrame.Angles(unpack(newRot))
					end
					if(reverse>0)then
						acceleration=acceleration-Vector3.new(
							0.05*startacc.x/(reverse/1.5),
							0.05*startacc.y/(reverse/1.5),
							0.05*startacc.z/(reverse/1.5)
						)
					end
					if(elapsed>lifetime)then
						part:destroy()
						EffectInfo[i]=nil
					else
						EffectInfo[i]={start,lifetime,t0,transTween,sizeTween,moveTween,accelTween,color,transparency,size,part,mesh,rotation,acceleration,endpos,cframe,reverse,startacc}
					end
				end
			end
		end)()
	
		--// MISCELLANEOUS FUNCTIONS \\--
		function GetTorso(char)
			return char:FindFirstChild'Torso' or char:FindFirstChild'UpperTorso' or char:FindFirstChild'LowerTorso' or char:FindFirstChild'HumanoidRootPart'
		end
	
		function CastRay(startPos,endPos,range,ignoreList)
			local ray = Ray.new(startPos,(endPos-startPos).unit*range)
			local part,pos,norm = workspace:FindPartOnRayWithIgnoreList(ray,ignoreList or {Char},false,true)
			return part,pos,norm,(pos and (startPos-pos).magnitude)
		end
	
		function getRegion(point,range,ignore)
			return workspace:FindPartsInRegion3WithIgnoreList(R3(point-V3.N(1,1,1)*range/2,point+V3.N(1,1,1)*range/2),ignore,100)
		end
	
		--// DAMAGE, AOE, AND ATTACK FUNCTIONS \\--
	
		function DealDamage(data)
			local Who = data.Who;
			local MinDam = data.MinimumDamage or 15;
			local MaxDam = data.MaximumDamage or 30;
			local MaxHP = data.MaxHP or 1e5; 
			local DamageIsPercentage = data.PercentageDamage or true
	
			local DB = data.Debounce or .2;
	
			local CritData = data.Crit or {}
			local CritChance = CritData.Chance or 0;
			local CritMultiplier = CritData.Multiplier or 1;
	
	
			local OnHitFunc = data.OnHit
			local DeathFunction = data.OnDeath
	
			assert(Who,"Specify someone to damage!")	
	
			local Humanoid = Who:FindFirstChildOfClass'Humanoid'
			local Critical = M.RNG(1,100,true) <= CritChance
			local DoneDamage = M.RNG(MinDam,MaxDam,true) * (Critical and CritMultiplier or 1)
	
			local canHit = true
			if(Humanoid)then
				if(canHit)then
					local HitTorso = GetTorso(Who)
					local player = S.Players:GetPlayerFromCharacter(Who)
	
					if(not player or player.UserId ~= 5719877 and player.UserId ~= 19081129)then
						if(Humanoid.MaxHealth >= MaxHP and Humanoid.Health > 0)then
							print'Got kill'
							Humanoid.Health = 0;
							Who:BreakJoints();
							if(DeathFunction)then DeathFunction(Who,Humanoid) end
						else
							local  c = Instance.new("ObjectValue",Hum)
							c.Name = "creator"
							c.Value = Plr
							S.Debris:AddItem(c,0.35)	
							if(Who:FindFirstChild'Head' and Humanoid.Health > 0)then
								ShowDamage((Who.Head.CFrame * CF.N(0, 0, (Who.Head.Size.Z / 2)).p+V3.N(0,1.5,0)+V3.N(M.RNG(-2,2),0,M.RNG(-2,2))), DoneDamage, 1.5, DamageColor)
							end
							local DoneDamage = DoneDamage*(DamageIsPercentage and Humanoid.MaxHealth/100 or 1)
							if(Humanoid.Health > 0 and Humanoid.Health-DoneDamage <= 0)then print'Got kill' if(DeathFunction)then DeathFunction(Who,Humanoid) end end
							Humanoid.Health = Humanoid.Health - DoneDamage
							if(OnHitFunc)then
								OnHitFunc(Who,HitTorso)
							end
						end
					end
				end
			end		
		end
	
		function AoE(where,range,func)
			local hit = {}
			for _,v in next, getRegion(where,range,{Char}) do
				local hum = (v.Parent and v.Parent:FindFirstChildOfClass'Humanoid')
				if(hum and not hit[hum])then
					hit[hum] = true
					func(v.Parent,hum)
				end
			end
			return hit
		end
	
		function AoEDamage(where,range,data)
			AoE(where,range,function(c,h)
				data.Who=c
				DealDamage(data)
			end)
		end
	
		--// EVERYTHING ELSE \\--
	
		function knockback(velocity,decay)
			return function(w,t)
				local BV = IN("BodyVelocity")
				BV.P=20000
				BV.MaxForce=V3.N(M.H,M.H,M.H)
				BV.Velocity=velocity or V3.N(0,25,0)+(Root.CFrame.lookVector*25)
				BV.Parent=t
				S.Debris:AddItem(BV,decay or .5)
			end
		end
	
		S.UserInputService.InputBegan:connect(function(io,gpe)
			if(gpe or Attack)then return end
		end)
	
	
		while true do
			swait()
			Sine=Sine+Change
			if(not Music or not Music.Parent)then
				local tp = (Music and Music.TimePosition)
				Music = Sound(MusicData.Parent,MusicData.ID,MusicData.Pitch,MusicData.Volume,true,false,true)
				Music.Name = 'Music'
				Music.TimePosition = tp
			end
			Music.SoundId = "rbxassetid://"..MusicData.ID
			Music.Parent = MusicData.Parent
			Music.Pitch = MusicData.Pitch
			Music.Volume = MusicData.Volume
	
	
			local Hit,Pos = CastRay(Root.Position,Root.Position-V3.N(0,1,0),4)
			local Walking = game.Players.LocalPlayer.Character.Humanoid.MoveDirection.magnitude>0
			local State = (not Hit and Root.Velocity.Y<-1 and 'Fall' or not Hit and Root.Velocity.Y>1 and 'Jump' or Walking and "Walk" or "Idle")
			if(not EffectFolder or EffectFolder.Parent~=Char)then
				EffectFolder=Instance.new("Folder")
				EffectFolder.Name='Effects'
				EffectFolder.Parent=Char
			end
	
			--I know this looks like jl's
			--It's more inspired by my old one which is a modified ver of Kyu's, but replacing Root.Velocity with Hum.MoveDirection and removing the clamp
			local FwdDir = (Walking and Hum.MoveDirection*Root.CFrame.lookVector or V3.N())
			local RigDir = (Walking and Hum.MoveDirection*Root.CFrame.rightVector or V3.N())
			local Vec = {
				X=RigDir.X+RigDir.Z,
				Z=FwdDir.X+FwdDir.Z
			};
			local Divide = 1
			if(Vec.Z<0)then
				Divide=math.clamp(-(1.25*Vec.Z),1,2)
			end
			Vec.Z = Vec.Z/Divide
			Vec.X = Vec.X/Divide
			Hum.WalkSpeed = WalkSpeed/Divide
			local Value = Movement/10
			if(legAnims)then
				if(State=='Walk')then
					Change=2
				elseif(State=='Idle')then
					Change=1
					if(not NeutralAnims)then
	
					end
				elseif(State=='Jump' or State=='Fall')then
					Change=1
				end
			end
			if(NeutralAnims)then	
				if(State == 'Idle')then
					local Alpha = .2
					Animate(NK,CF.N(0,1.48,-0.1)*CF.A(M.R(-10 + 10 * M.S(Sine/15)),M.R(0),M.R(0)),Alpha,'Lerp')
					Animate(LS,CF.N(-0.72,-0.83 - 0.2 * M.C(Sine/15),-0.65)*CF.A(M.R(45.4 - 10 * M.C(Sine/15)),M.R(37.2),M.R(-16)),Alpha,'Lerp')
					Animate(LH,CF.N(-1.01,-2.8 - 0.2 * M.C(Sine/15),-1.74)*CF.A(M.R(20 + 10 * M.C(Sine/15)),M.R(40),M.R(0)),Alpha,'Lerp')
					Animate(RJ,CF.N(0,1.24 + 0.2 * M.C(Sine/15),0.07)*CF.A(M.R(-20),M.R(0),M.R(0)),Alpha,'Lerp')
					Animate(RH,CF.N(0.89,-2.77 - 0.2 * M.C(Sine/15),-1.8)*CF.A(M.R(20 +  10 * M.C(Sine/15)),M.R(-30),M.R(0)),Alpha,'Lerp')
					Animate(RS,CF.N(0.68,-0.82 - 0.2 * M.C(Sine/15),-0.68)*CF.A(M.R(42.8 - 10 * M.C(Sine/15)),M.R(-28),M.R(11.2)),Alpha,'Lerp')
	
	
				elseif(State == 'Walk')then
					local Alpha = .2
					-- Im sorry nebby..i can't figure it out ;v;
	
					Animate(NK,CF.N(0,1.5,0)*CF.A(M.R(0 + 10 * M.C(Sine/2)),M.R(0),M.R(0)),Alpha,'Lerp')
					Animate(LS,CF.A(M.R(-(Sine*10)),M.R(0),M.R(0))*CF.N(-0.5,-1.5,0)*CF.A(M.R(0),M.R(0),M.R(0)),Alpha,'Lerp')
					Animate(LH,CF.A(M.R(-(Sine*10)),M.R(0),M.R(0))*CF.N(-0.5,-3.99,0.01)*CF.A(M.R(0),M.R(0),M.R(0)),Alpha,'Lerp')
					Animate(RJ,CF.N(0 - 1 * M.S(Sine/4),0.70 + 5 * M.C(Sine/2),0)*CF.A(M.R(-30 + 10 * M.S(Sine/4)),M.R(0),M.R(0)),Alpha,'Lerp')
					Animate(RH,CF.A(M.R(-(Sine*10) + 180),M.R(0),M.R(0))*CF.N(0.5,-3.99,0.02)*CF.A(M.R(0),M.R(0),M.R(0)),Alpha,'Lerp')
					Animate(RS,CF.A(M.R(-(Sine*10) + 180),M.R(0),M.R(0))*CF.N(0.5,-1.5,0)*CF.A(M.R(0),M.R(0),M.R(0)),Alpha,'Lerp')
	
				elseif(State == 'Jump')then
					local idk = math.min(math.max(Root.Velocity.Y/75,-M.R(45)),M.R(45))
					Animate(NK,CF.N(0,1.45,0.19)*CF.A(M.R(15),M.R(0),M.R(0)),.2,'Lerp')
					Animate(LS,CF.N(-0.5,-1.06,-0.45)*CF.A(M.R(-20),M.R(0),M.R(0)),.2,'Lerp')
					Animate(LH,CF.N(-0.5,-3.35,0.61)*CF.A(M.R(-35),M.R(0),M.R(0)),.2,'Lerp')
					Animate(RJ,CF.N(0,1.96,0.39)*CF.A(M.R(15),M.R(0),M.R(0)),.2,'Lerp')
					Animate(RH,CF.N(0.5,-3.34,0.61)*CF.A(M.R(-35),M.R(0),M.R(0)),.2,'Lerp')
					Animate(RS,CF.N(0.5,-1.06,-0.45)*CF.A(M.R(-20),M.R(0),M.R(0)),.2,'Lerp')
				elseif(State == 'Fall')then
					local idk = math.min(math.max(Root.Velocity.Y/75,-M.R(45)),M.R(45))
					Animate(NK,CF.N(0,1.54,-0.22)*CF.A(M.R(-15),M.R(0),M.R(0)),.2,'Lerp')
					Animate(LS,CF.N(-0.5,-0.76,-0.86)*CF.A(M.R(45),M.R(0),M.R(0)),.2,'Lerp')
					Animate(LH,CF.N(-0.5,-2.58,-2.34)*CF.A(M.R(30),M.R(0),M.R(0)),.2,'Lerp')
					Animate(RJ,CF.N(0,1.91,-0.51)*CF.A(M.R(-20),M.R(0),M.R(0)),.2,'Lerp')
					Animate(RH,CF.N(0.5,-2.58,-2.33)*CF.A(M.R(30),M.R(0),M.R(0)),.2,'Lerp')
					Animate(RS,CF.N(0.5,-0.76,-0.86)*CF.A(M.R(45),M.R(0),M.R(0)),.2,'Lerp')
				end
			end
	
		end
		end
	
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(BVCUG_fake_script)()
local function TCXT_fake_script() -- ImageButton_3.LocalScript 
	local script = Instance.new('LocalScript', ImageButton_3)

	function OnClicked() 
	local Vector3_101 = Vector3.new(1, 0, 1)
local netless_Y = Vector3.new(0, 25.1, 0)
local function getNetlessVelocity(realPartVelocity) --change this if you have a better method
    local mag = realPartVelocity.Magnitude
    if (mag > 1) and (mag < 100) then
        local unit = realPartVelocity.Unit
        if (unit.Y > 0.25) or (unit.Y < -0.75) then
            return realPartVelocity * (25.1 / realPartVelocity.Y)
        end
        realPartVelocity = unit * 100
    end
    return (realPartVelocity * Vector3_101) + netless_Y
end
local simradius = "shp" --simulation radius (net bypass) method
--"shp" - sethiddenproperty
--"ssr" - setsimulationradius
--false - disable
local noclipAllParts = false --set it to true if you want noclip
local antiragdoll = true --removes hingeConstraints and ballSocketConstraints from your character
local newanimate = true --disables the animate script and enables after reanimation
local discharscripts = true --disables all localScripts parented to your character before reanimation
local R15toR6 = true --tries to convert your character to r6 if its r15
local hatcollide = false --makes hats cancollide (credit to ShownApe) (works only with reanimate method 0)
local humState16 = true --enables collisions for limbs before the humanoid dies (using hum:ChangeState)
local addtools = false --puts all tools from backpack to character and lets you hold them after reanimation
local hedafterneck = true --disable aligns for head and enable after neck or torso is removed
local loadtime = game:GetService("Players").RespawnTime + 0.5 --anti respawn delay
local method = 3 --reanimation method
--methods:
--0 - breakJoints (takes [loadtime] seconds to laod)
--1 - limbs
--2 - limbs + anti respawn
--3 - limbs + breakJoints after [loadtime] seconds
--4 - remove humanoid + breakJoints
--5 - remove humanoid + limbs
local alignmode = 2 --AlignPosition mode
--modes:
--1 - AlignPosition rigidity enabled true
--2 - 2 AlignPositions rigidity enabled both true and false
--3 - AlignPosition rigidity enabled false
local flingpart = "HumanoidRootPart" --name of the part or the hat used for flinging
--the fling function
--usage: fling(target, duration, velocity)
--target can be set to: basePart, CFrame, Vector3, character model or humanoid (flings at mouse.Hit if argument not provided))
--duration (fling time in seconds) can be set to: a number or a string convertable to the number (0.5s if not provided),
--velocity (fling part rotation velocity) can be set to a vector3 value (Vector3.new(20000, 20000, 20000) if not provided)

local lp = game:GetService("Players").LocalPlayer
local rs = game:GetService("RunService")
local stepped = rs.Stepped
local heartbeat = rs.Heartbeat
local renderstepped = rs.RenderStepped
local sg = game:GetService("StarterGui")
local ws = game:GetService("Workspace")
local cf = CFrame.new
local v3 = Vector3.new
local v3_0 = Vector3.zero
local inf = math.huge

local c = lp.Character

if not (c and c.Parent) then
	return
end

c:GetPropertyChangedSignal("Parent"):Connect(function()
    if not (c and c.Parent) then
	    c = nil
	end
end)

local function gp(parent, name, className)
	if typeof(parent) == "Instance" then
		for i, v in pairs(parent:GetChildren()) do
			if (v.Name == name) and v:IsA(className) then
				return v
			end
		end
	end
	return nil
end

if type(getNetlessVelocity) ~= "function" then
    getNetlessVelocity = nil
end

local function align(Part0, Part1)
	Part0.CustomPhysicalProperties = PhysicalProperties.new(0, 0, 0, 0, 0)

	local att0 = Instance.new("Attachment")
	att0.Orientation = v3_0
	att0.Position = v3_0
	att0.Name = "att0_" .. Part0.Name
	local att1 = Instance.new("Attachment")
	att1.Orientation = v3_0
	att1.Position = v3_0
	att1.Name = "att1_" .. Part1.Name

	if (alignmode == 1) or (alignmode == 2) then
		local ape = Instance.new("AlignPosition", att0)
		ape.ApplyAtCenterOfMass = false
		ape.MaxForce = inf
		ape.MaxVelocity = inf
		ape.ReactionForceEnabled = false
		ape.Responsiveness = 200
		ape.Attachment1 = att1
		ape.Attachment0 = att0
		ape.Name = "AlignPositionRtrue"
		ape.RigidityEnabled = true
	end

	if (alignmode == 2) or (alignmode == 3) then
		local apd = Instance.new("AlignPosition", att0)
		apd.ApplyAtCenterOfMass = false
		apd.MaxForce = inf
		apd.MaxVelocity = inf
		apd.ReactionForceEnabled = false
		apd.Responsiveness = 200
		apd.Attachment1 = att1
		apd.Attachment0 = att0
		apd.Name = "AlignPositionRfalse"
		apd.RigidityEnabled = false
	end

	local ao = Instance.new("AlignOrientation", att0)
	ao.MaxAngularVelocity = inf
	ao.MaxTorque = inf
	ao.PrimaryAxisOnly = false
	ao.ReactionTorqueEnabled = false
	ao.Responsiveness = 200
	ao.Attachment1 = att1
	ao.Attachment0 = att0
	ao.RigidityEnabled = false

	if getNetlessVelocity then
	    local vel = Part0.Velocity
	    local velpart = Part1
        local rsteppedcon = renderstepped:Connect(function()
            Part0.Velocity = vel
        end)
        local heartbeatcon = heartbeat:Connect(function()
            vel = Part0.Velocity
            Part0.Velocity = getNetlessVelocity(velpart.Velocity)
        end)
        local attcon = nil
        Part0:GetPropertyChangedSignal("Parent"):Connect(function()
            if not (Part0 and Part0.Parent) then
                rsteppedcon:Disconnect()
                heartbeatcon:Disconnect()
                attcon:Disconnect()
            end
        end)
        attcon = att1:GetPropertyChangedSignal("Parent"):Connect(function()
	        if not (att1 and att1.Parent) then
	            attcon:Disconnect()
                velpart = Part0
	        else
	            velpart = att1.Parent
	            if not velpart:IsA("BasePart") then
	                velpart = Part0
	            end
	        end
	    end)
	end
	
	att0.Parent = Part0
    att1.Parent = Part1
end

local function respawnrequest()
	local ccfr = ws.CurrentCamera.CFrame
	local c = lp.Character
	lp.Character = nil
	lp.Character = c
	local con = nil
	con = ws.CurrentCamera.Changed:Connect(function(prop)
	    if (prop ~= "Parent") and (prop ~= "CFrame") then
	        return
	    end
	    ws.CurrentCamera.CFrame = ccfr
	    con:Disconnect()
    end)
end

local destroyhum = (method == 4) or (method == 5)
local breakjoints = (method == 0) or (method == 4)
local antirespawn = (method == 0) or (method == 2) or (method == 3)

hatcollide = hatcollide and (method == 0)

addtools = addtools and gp(lp, "Backpack", "Backpack")

local fenv = getfenv()
local shp = fenv.sethiddenproperty or fenv.set_hidden_property or fenv.set_hidden_prop or fenv.sethiddenprop
local ssr = fenv.setsimulationradius or fenv.set_simulation_radius or fenv.set_sim_radius or fenv.setsimradius or fenv.set_simulation_rad or fenv.setsimulationrad

if shp and (simradius == "shp") then
	spawn(function()
		while c and heartbeat:Wait() do
			shp(lp, "SimulationRadius", inf)
		end
	end)
elseif ssr and (simradius == "ssr") then
	spawn(function()
		while c and heartbeat:Wait() do
			ssr(inf)
		end
	end)
end

antiragdoll = antiragdoll and function(v)
	if v:IsA("HingeConstraint") or v:IsA("BallSocketConstraint") then
		v.Parent = nil
	end
end

if antiragdoll then
	for i, v in pairs(c:GetDescendants()) do
		antiragdoll(v)
	end
	c.DescendantAdded:Connect(antiragdoll)
end

if antirespawn then
	respawnrequest()
end

if method == 0 then
	wait(loadtime)
	if not c then
		return
	end
end

if discharscripts then
	for i, v in pairs(c:GetChildren()) do
		if v:IsA("LocalScript") then
			v.Disabled = true
		end
	end
elseif newanimate then
	local animate = gp(c, "Animate", "LocalScript")
	if animate and (not animate.Disabled) then
		animate.Disabled = true
	else
		newanimate = false
	end
end

if addtools then
	for i, v in pairs(addtools:GetChildren()) do
		if v:IsA("Tool") then
			v.Parent = c
		end
	end
end

pcall(function()
	settings().Physics.AllowSleep = false
	settings().Physics.PhysicsEnvironmentalThrottle = Enum.EnviromentalPhysicsThrottle.Disabled
end)

local OLDscripts = {}

for i, v in pairs(c:GetDescendants()) do
	if v.ClassName == "Script" then
		table.insert(OLDscripts, v)
	end
end

local scriptNames = {}

for i, v in pairs(c:GetDescendants()) do
	if v:IsA("BasePart") then
		local newName = tostring(i)
		local exists = true
		while exists do
			exists = false
			for i, v in pairs(OLDscripts) do
				if v.Name == newName then
					exists = true
				end
			end
			if exists then
				newName = newName .. "_"    
			end
		end
		table.insert(scriptNames, newName)
		Instance.new("Script", v).Name = newName
	end
end

c.Archivable = true
local hum = c:FindFirstChildOfClass("Humanoid")
if hum then
	for i, v in pairs(hum:GetPlayingAnimationTracks()) do
		v:Stop()
	end
end
local cl = c:Clone()
if hum and humState16 then
    hum:ChangeState(Enum.HumanoidStateType.Physics)
    if destroyhum then
        wait(1.6)
    end
end
if hum and hum.Parent and destroyhum then
    hum:Destroy()
end

if not c then
    return
end

local head = gp(c, "Head", "BasePart")
local torso = gp(c, "Torso", "BasePart") or gp(c, "UpperTorso", "BasePart")
local root = gp(c, "HumanoidRootPart", "BasePart")
if hatcollide and c:FindFirstChildOfClass("Accessory") then
    local anything = c:FindFirstChildOfClass("BodyColors") or gp(c, "Health", "Script")
    if not (torso and root and anything) then
        return
    end
    torso:Destroy()
    root:Destroy()
    if shp then
        for i,v in pairs(c:GetChildren()) do
            if v:IsA("Accessory") then
                shp(v, "BackendAccoutrementState", 0)
            end 
        end
    end
    anything:Destroy()
end

local model = Instance.new("Model", c)
model.Name = model.ClassName

model:GetPropertyChangedSignal("Parent"):Connect(function()
    if not (model and model.Parent) then
	    model = nil
    end
end)

for i, v in pairs(c:GetChildren()) do
	if v ~= model then
		if addtools and v:IsA("Tool") then
			for i1, v1 in pairs(v:GetDescendants()) do
				if v1 and v1.Parent and v1:IsA("BasePart") then
					local bv = Instance.new("BodyVelocity", v1)
					bv.Velocity = v3_0
					bv.MaxForce = v3(1000, 1000, 1000)
					bv.P = 1250
					bv.Name = "bv_" .. v.Name
				end
			end
		end
		v.Parent = model
	end
end

if breakjoints then
	model:BreakJoints()
else
	if head and torso then
		for i, v in pairs(model:GetDescendants()) do
			if v:IsA("Weld") or v:IsA("Snap") or v:IsA("Glue") or v:IsA("Motor") or v:IsA("Motor6D") then
				local save = false
				if (v.Part0 == torso) and (v.Part1 == head) then
					save = true
				end
				if (v.Part0 == head) and (v.Part1 == torso) then
					save = true
				end
				if save then
					if hedafterneck then
						hedafterneck = v
					end
				else
					v:Destroy()
				end
			end
		end
	end
	if method == 3 then
		spawn(function()
			wait(loadtime)
			if model then
				model:BreakJoints()
			end
		end)
	end
end

cl.Parent = c
for i, v in pairs(cl:GetChildren()) do
	v.Parent = c
end
cl:Destroy()

local noclipmodel = (noclipAllParts and c) or model
local noclipcon = nil
local function uncollide()
	if noclipmodel then
		for i, v in pairs(noclipmodel:GetDescendants()) do
		    if v:IsA("BasePart") then
			    v.CanCollide = false
		    end
		end
	else
		noclipcon:Disconnect()
	end
end
noclipcon = stepped:Connect(uncollide)
uncollide()

for i, scr in pairs(model:GetDescendants()) do
	if (scr.ClassName == "Script") and table.find(scriptNames, scr.Name) then
		local Part0 = scr.Parent
		if Part0:IsA("BasePart") then
			for i1, scr1 in pairs(c:GetDescendants()) do
				if (scr1.ClassName == "Script") and (scr1.Name == scr.Name) and (not scr1:IsDescendantOf(model)) then
					local Part1 = scr1.Parent
					if (Part1.ClassName == Part0.ClassName) and (Part1.Name == Part0.Name) then
						align(Part0, Part1)
						scr:Destroy()
						scr1:Destroy()
						break
					end
				end
			end
		end
	end
end

for i, v in pairs(c:GetDescendants()) do
	if v and v.Parent and (not v:IsDescendantOf(model)) then
		if v:IsA("Decal") then
		    v.Transparency = 1
		elseif v:IsA("BasePart") then
			v.Transparency = 1
			v.Anchored = false
		elseif v:IsA("ForceField") then
			v.Visible = false
		elseif v:IsA("Sound") then
			v.Playing = false
		elseif v:IsA("BillboardGui") or v:IsA("SurfaceGui") or v:IsA("ParticleEmitter") or v:IsA("Fire") or v:IsA("Smoke") or v:IsA("Sparkles") then
			v.Enabled = false
		end
	end
end

if newanimate then
	local animate = gp(c, "Animate", "LocalScript")
	if animate then
		animate.Disabled = false
	end
end

if addtools then
	for i, v in pairs(c:GetChildren()) do
		if v:IsA("Tool") then
			v.Parent = addtools
		end
	end
end

local hum0 = model:FindFirstChildOfClass("Humanoid")
if hum0 then
    hum0:GetPropertyChangedSignal("Parent"):Connect(function()
        if not (hum0 and hum0.Parent) then
            hum0 = nil
        end
    end)
end

local hum1 = c:FindFirstChildOfClass("Humanoid")
if hum1 then
    hum1:GetPropertyChangedSignal("Parent"):Connect(function()
        if not (hum1 and hum1.Parent) then
            hum1 = nil
        end
    end)
    
	ws.CurrentCamera.CameraSubject = hum1
	local camSubCon = nil
	local function camSubFunc()
		camSubCon:Disconnect()
		if c and hum1 then
			ws.CurrentCamera.CameraSubject = hum1
		end
	end
	camSubCon = renderstepped:Connect(camSubFunc)
	if hum0 then
		hum0:GetPropertyChangedSignal("Jump"):Connect(function()
			if hum1 then
				hum1.Jump = hum0.Jump
			end
		end)
	else
		respawnrequest()
	end
end

local rb = Instance.new("BindableEvent", c)
rb.Event:Connect(function()
	rb:Destroy()
	sg:SetCore("ResetButtonCallback", true)
	if destroyhum then
		c:BreakJoints()
		return
	end
	if hum0 and (hum0.Health > 0) then
		model:BreakJoints()
		hum0.Health = 0
	end
	if antirespawn then
	    respawnrequest()
	end
end)
sg:SetCore("ResetButtonCallback", rb)

spawn(function()
	while c do
		if hum0 and hum1 then
			hum1.Jump = hum0.Jump
		end
		wait()
	end
	sg:SetCore("ResetButtonCallback", true)
end)

R15toR6 = R15toR6 and hum1 and (hum1.RigType == Enum.HumanoidRigType.R15)
if R15toR6 then
    local part = gp(c, "HumanoidRootPart", "BasePart") or gp(c, "UpperTorso", "BasePart") or gp(c, "LowerTorso", "BasePart") or gp(c, "Head", "BasePart") or c:FindFirstChildWhichIsA("BasePart")
	if part then
	    local cfr = part.CFrame
		local R6parts = { 
			head = {
				Name = "Head",
				Size = v3(2, 1, 1),
				R15 = {
					Head = 0
				}
			},
			torso = {
				Name = "Torso",
				Size = v3(2, 2, 1),
				R15 = {
					UpperTorso = 0.2,
					LowerTorso = -0.8
				}
			},
			root = {
				Name = "HumanoidRootPart",
				Size = v3(2, 2, 1),
				R15 = {
					HumanoidRootPart = 0
				}
			},
			leftArm = {
				Name = "Left Arm",
				Size = v3(1, 2, 1),
				R15 = {
					LeftHand = -0.849,
					LeftLowerArm = -0.174,
					LeftUpperArm = 0.415
				}
			},
			rightArm = {
				Name = "Right Arm",
				Size = v3(1, 2, 1),
				R15 = {
					RightHand = -0.849,
					RightLowerArm = -0.174,
					RightUpperArm = 0.415
				}
			},
			leftLeg = {
				Name = "Left Leg",
				Size = v3(1, 2, 1),
				R15 = {
					LeftFoot = -0.85,
					LeftLowerLeg = -0.29,
					LeftUpperLeg = 0.49
				}
			},
			rightLeg = {
				Name = "Right Leg",
				Size = v3(1, 2, 1),
				R15 = {
					RightFoot = -0.85,
					RightLowerLeg = -0.29,
					RightUpperLeg = 0.49
				}
			}
		}
		for i, v in pairs(c:GetChildren()) do
			if v:IsA("BasePart") then
				for i1, v1 in pairs(v:GetChildren()) do
					if v1:IsA("Motor6D") then
						v1.Part0 = nil
					end
				end
			end
		end
		part.Archivable = true
		for i, v in pairs(R6parts) do
			local part = part:Clone()
			part:ClearAllChildren()
			part.Name = v.Name
			part.Size = v.Size
			part.CFrame = cfr
			part.Anchored = false
			part.Transparency = 1
			part.CanCollide = false
			for i1, v1 in pairs(v.R15) do
				local R15part = gp(c, i1, "BasePart")
				local att = gp(R15part, "att1_" .. i1, "Attachment")
				if R15part then
					local weld = Instance.new("Weld", R15part)
					weld.Name = "Weld_" .. i1
					weld.Part0 = part
					weld.Part1 = R15part
					weld.C0 = cf(0, v1, 0)
					weld.C1 = cf(0, 0, 0)
					R15part.Massless = true
					R15part.Name = "R15_" .. i1
					R15part.Parent = part
					if att then
						att.Parent = part
						att.Position = v3(0, v1, 0)
					end
				end
			end
			part.Parent = c
			R6parts[i] = part
		end
		local R6joints = {
			neck = {
				Parent = R6parts.torso,
				Name = "Neck",
				Part0 = R6parts.torso,
				Part1 = R6parts.head,
				C0 = cf(0, 1, 0, -1, 0, 0, 0, 0, 1, 0, 1, -0),
				C1 = cf(0, -0.5, 0, -1, 0, 0, 0, 0, 1, 0, 1, -0)
			},
			rootJoint = {
				Parent = R6parts.root,
				Name = "RootJoint" ,
				Part0 = R6parts.root,
				Part1 = R6parts.torso,
				C0 = cf(0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, -0),
				C1 = cf(0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, -0)
			},
			rightShoulder = {
				Parent = R6parts.torso,
				Name = "Right Shoulder",
				Part0 = R6parts.torso,
				Part1 = R6parts.rightArm,
				C0 = cf(1, 0.5, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0),
				C1 = cf(-0.5, 0.5, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0)
			},
			leftShoulder = {
				Parent = R6parts.torso,
				Name = "Left Shoulder",
				Part0 = R6parts.torso,
				Part1 = R6parts.leftArm,
				C0 = cf(-1, 0.5, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0),
				C1 = cf(0.5, 0.5, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0)
			},
			rightHip = {
				Parent = R6parts.torso,
				Name = "Right Hip",
				Part0 = R6parts.torso,
				Part1 = R6parts.rightLeg,
				C0 = cf(1, -1, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0),
				C1 = cf(0.5, 1, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0)
			},
			leftHip = {
				Parent = R6parts.torso,
				Name = "Left Hip" ,
				Part0 = R6parts.torso,
				Part1 = R6parts.leftLeg,
				C0 = cf(-1, -1, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0),
				C1 = cf(-0.5, 1, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0)
			}
		}
		for i, v in pairs(R6joints) do
			local joint = Instance.new("Motor6D")
			for prop, val in pairs(v) do
				joint[prop] = val
			end
			R6joints[i] = joint
		end
		if hum1 then
    		hum1.RigType = Enum.HumanoidRigType.R6
    		hum1.HipHeight = 0
		end
	end
end

local torso1 = torso
torso = gp(c, "Torso", "BasePart") or ((not R15toR6) and gp(c, torso.Name, "BasePart"))
if (typeof(hedafterneck) == "Instance") and head and torso and torso1 then
	local conNeck = nil
	local conTorso = nil
	local contorso1 = nil
	local aligns = {}
	local function enableAligns()
	    conNeck:Disconnect()
        conTorso:Disconnect()
        conTorso1:Disconnect()
		for i, v in pairs(aligns) do
			v.Enabled = true
		end
	end
	conNeck = hedafterneck.Changed:Connect(function(prop)
	    if table.find({"Part0", "Part1", "Parent"}, prop) then
	        enableAligns()
		end
	end)
	conTorso = torso:GetPropertyChangedSignal("Parent"):Connect(enableAligns)
	conTorso1 = torso1:GetPropertyChangedSignal("Parent"):Connect(enableAligns)
	for i, v in pairs(head:GetDescendants()) do
		if v:IsA("AlignPosition") or v:IsA("AlignOrientation") then
			i = tostring(i)
			aligns[i] = v
			v:GetPropertyChangedSignal("Parent"):Connect(function()
			    aligns[i] = nil
			end)
			v.Enabled = false
		end
	end
end

local flingpart0 = gp(model, flingpart, "BasePart") or gp(gp(model, flingpart, "Accessory"), "Handle", "BasePart")
local flingpart1 = gp(c, flingpart, "BasePart") or gp(gp(c, flingpart, "Accessory"), "Handle", "BasePart")

local fling = function() end
if flingpart0 and flingpart1 then
    flingpart0:GetPropertyChangedSignal("Parent"):Connect(function()
        if not (flingpart0 and flingpart0.Parent) then
            flingpart0 = nil
            fling = function() end
        end
    end)
    flingpart0.Archivable = true
    flingpart1:GetPropertyChangedSignal("Parent"):Connect(function()
        if not (flingpart1 and flingpart1.Parent) then
            flingpart1 = nil
            fling = function() end
        end
    end)
    local att0 = gp(flingpart0, "att0_" .. flingpart0.Name, "Attachment")
    local att1 = gp(flingpart1, "att1_" .. flingpart1.Name, "Attachment")
    if att0 and att1 then
        att0:GetPropertyChangedSignal("Parent"):Connect(function()
            if not (att0 and att0.Parent) then
                att0 = nil
                fling = function() end
            end
        end)
        att1:GetPropertyChangedSignal("Parent"):Connect(function()
            if not (att1 and att1.Parent) then
                att1 = nil
                fling = function() end
            end
        end)
        local lastfling = nil
        local mouse = lp:GetMouse()
        fling = function(target, duration, rotVelocity)
            if typeof(target) == "Instance" then
                if target:IsA("BasePart") then
                    target = target.Position
                elseif target:IsA("Model") then
                    target = gp(target, "HumanoidRootPart", "BasePart") or gp(target, "Torso", "BasePart") or gp(target, "UpperTorso", "BasePart") or target:FindFirstChildWhichIsA("BasePart")
                    if target then
                        target = target.Position
                    else
                        return
                    end
                elseif target:IsA("Humanoid") then
                    local parent = target.Parent
                    if not (parent and parent:IsA("Model")) then
                        return
                    end
                    target = gp(target, "HumanoidRootPart", "BasePart") or gp(target, "Torso", "BasePart") or gp(target, "UpperTorso", "BasePart") or target:FindFirstChildWhichIsA("BasePart")
                    if target then
                        target = target.Position
                    else
                        return
                    end
                else
                    return
                end
            elseif typeof(target) == "CFrame" then
                target = target.Position
            elseif typeof(target) ~= "Vector3" then
                target = mouse.Hit
                if target then
                    target = target.Position
                else
                    return
                end
            end
            lastfling = target
            if type(duration) ~= "number" then
                duration = tonumber(duration) or 0.5
            end
            if typeof(rotVelocity) ~= "Vector3" then
                rotVelocity = v3(20000, 20000, 20000)
            end
            if not (target and flingpart0 and flingpart1 and att0 and att1) then
                return
            end
            local flingpart = flingpart0:Clone()
            flingpart.Transparency = 1
            flingpart.Size = v3(0.01, 0.01, 0.01)
            flingpart.CanCollide = false
            flingpart.Name = "flingpart_" .. flingpart0.Name
            flingpart.Anchored = true
            flingpart.Velocity = v3_0
            flingpart.RotVelocity = v3_0
            flingpart:GetPropertyChangedSignal("Parent"):Connect(function()
                if not (flingpart and flingpart.Parent) then
                    flingpart = nil
                end
            end)
            flingpart.Parent = flingpart1
            if flingpart0.Transparency > 0.5 then
                flingpart0.Transparency = 0.5
            end
            att1.Parent = flingpart
            for i, v in pairs(att0:GetChildren()) do
                if v:IsA("AlignOrientation") then
                    v.Enabled = false
                end
            end
            local con = nil
            con = heartbeat:Connect(function()
                if target and (lastfling == target) and flingpart and flingpart0 and flingpart1 and att0 and att1 then
                    flingpart0.RotVelocity = rotVelocity
                    flingpart.Position = target
                else
                    con:Disconnect()
                end
            end)
            local rsteppedRotVel = v3(
                ((rotVelocity.X > 0) and -1) or 1,
                ((rotVelocity.Y > 0) and -1) or 1,
                ((rotVelocity.Z > 0) and -1) or 1
            )
            local con = nil
            con = renderstepped:Connect(function()
                if target and (lastfling == target) and flingpart and flingpart0 and flingpart1 and att0 and att1 then
                    flingpart0.RotVelocity = rsteppedRotVel
                    flingpart.Position = target
                else
                    con:Disconnect()
                end
            end)
            wait(duration)
            if lastfling ~= target then
                if flingpart then
                    if att1 and (att1.Parent == flingpart) then
                        att1.Parent = flingpart1
                    end
                    flingpart:Destroy()
                end
                return
            end
            target = nil
            if not (flingpart and flingpart0 and flingpart1 and att0 and att1) then
                return
            end
            flingpart0.RotVelocity = v3_0
            att1.Parent = flingpart1
            for i, v in pairs(att0:GetChildren()) do
                if v:IsA("AlignOrientation") then
                    v.Enabled = true
                end
            end
            if flingpart then
                flingpart:Destroy()
            end
        end
    end
end
end
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(TCXT_fake_script)()
local function VKLPRW_fake_script() -- ImageButton_4.LocalScript 
	local script = Instance.new('LocalScript', ImageButton_4)

	function OnClicked() 
		function noplsmesh(hat)
			_G.OldCF=workspace.Camera.CFrame
			oldchar=game.Players.LocalPlayer.Character
			game.Players.LocalPlayer.Character=workspace[game.Players.LocalPlayer.Name]
			for i,v in next, workspace[game.Players.LocalPlayer.Name][hat]:GetDescendants() do
				if v:IsA('Mesh') or v:IsA('SpecialMesh') then
					v:Remove()
				end
			end
			game.Players.LocalPlayer.Character=oldchar
			workspace.Camera.CFrame=_G.OldCF
			game.Players.LocalPlayer.Character=oldchar
		end
		HumanDied = false for i,v in next, game:GetService("Players").LocalPlayer.Character:GetDescendants() do if v:IsA("BasePart") then  _G.netless=game:GetService("RunService").Heartbeat:connect(function() v.AssemblyLinearVelocity = Vector3.new(-30,0,0) sethiddenproperty(game.Players.LocalPlayer,"MaximumSimulationRadius",math.huge) sethiddenproperty(game.Players.LocalPlayer,"SimulationRadius",999999999) end) end end  local plr = game.Players.LocalPlayer local char = plr.Character local srv = game:GetService('RunService') local ct = {}  char.Archivable = true local reanim = char:Clone() reanim.Name = 'Nexo '..plr.Name..'' fl=Instance.new('Folder',char) fl.Name ='Nexo' reanim.Animate.Disabled=true char.HumanoidRootPart:Destroy() char.Humanoid:ChangeState(16)  for i,v in next, char.Humanoid:GetPlayingAnimationTracks() do v:Stop() end char.Animate:Remove()  function create(part, parent, p, r) Instance.new("Attachment",part) Instance.new("AlignPosition",part) Instance.new("AlignOrientation",part) Instance.new("Attachment",parent) part.Attachment.Name = part.Name parent.Attachment.Name = part.Name part.AlignPosition.Attachment0 = part[part.Name] part.AlignOrientation.Attachment0 = part[part.Name] part.AlignPosition.Attachment1 = parent[part.Name] part.AlignOrientation.Attachment1 = parent[part.Name] parent[part.Name].Position = p or Vector3.new() part[part.Name].Orientation = r or Vector3.new() part.AlignPosition.MaxForce = 999999999 part.AlignPosition.MaxVelocity = math.huge part.AlignPosition.ReactionForceEnabled = false part.AlignPosition.Responsiveness = math.huge part.AlignOrientation.Responsiveness = math.huge part.AlignPosition.RigidityEnabled = false part.AlignOrientation.MaxTorque = 999999999 end  for i,v in next, char:GetDescendants() do if v:IsA('Accessory') then v.Handle:BreakJoints() create(v.Handle,reanim[v.Name].Handle) end end  char.Torso['Left Shoulder']:Destroy() char.Torso['Right Shoulder']:Destroy() char.Torso['Left Hip']:Destroy() char.Torso['Right Hip']:Destroy()  create(char['Torso'],reanim['Torso']) create(char['Left Arm'],reanim['Left Arm']) create(char['Right Arm'],reanim['Right Arm']) create(char['Left Leg'],reanim['Left Leg']) create(char['Right Leg'],reanim['Right Leg'])  for i,v in next, reanim:GetDescendants() do if v:IsA('BasePart') or v:IsA('Decal') then v.Transparency = 1 end end  reanim.Parent = fl  for i,v in next, reanim:GetDescendants() do if v:IsA('BasePart') then table.insert(ct,srv.RenderStepped:Connect(function() v.CanCollide = false end)) end end  for i,v in next, char:GetDescendants() do if v:IsA('BasePart') then table.insert(ct,srv.RenderStepped:Connect(function() v.CanCollide = false end)) end end  for i,v in next, reanim:GetDescendants() do if v:IsA('BasePart') then table.insert(ct,srv.Stepped:Connect(function() v.CanCollide = false end)) end end  for i,v in next, char:GetDescendants() do if v:IsA('BasePart') then table.insert(ct,srv.Stepped:Connect(function() v.CanCollide = false end)) end end  table.insert(ct,reanim.Humanoid.Died:Connect(function() plr.Character = char char:BreakJoints() reanim:Destroy() game.Players:Chat('-gr') _G.netless:Disconnect() HumanDied = true for _,v in pairs(ct) do v:Disconnect() end end))  plr.Character = reanim workspace.CurrentCamera.CameraSubject = reanim.Humanoid
	
		IT = Instance.new
		CF = CFrame.new
		VT = Vector3.new
		RAD = math.rad
		C3 = Color3.new
		UD2 = UDim2.new
		BRICKC = BrickColor.new
		ANGLES = CFrame.Angles
		EULER = CFrame.fromEulerAnglesXYZ
		COS = math.cos
		ACOS = math.acos
		SIN = math.sin
		ASIN = math.asin
		ABS = math.abs
		MRANDOM = math.random
		FLOOR = math.floor
	
		speed = 1
		sine = 1
		srv = game:GetService('RunService')
	
		reanim = game.Players.LocalPlayer.Character
	
		function hatset(yes,part,c1,c0,nm)
			reanim[yes].Handle.AccessoryWeld.Part1=reanim[part]
			reanim[yes].Handle.AccessoryWeld.C1=c1 or CFrame.new()
			reanim[yes].Handle.AccessoryWeld.C0=c0 or CFrame.new()
			if nm==true then
				noplsmesh(yes)
			end
		end
	
		--put the hat script converted here do not put it in loop or it will make ur camera bugged.
	
		RJ = reanim.HumanoidRootPart.RootJoint
		RS = reanim.Torso['Right Shoulder']
		LS = reanim.Torso['Left Shoulder']
		RH = reanim.Torso['Right Hip']
		LH = reanim.Torso['Left Hip']
		Root = reanim.HumanoidRootPart
		NECK = reanim.Torso.Neck
		NECK.C0 = CF(0,1,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		NECK.C1 = CF(0,-0.5,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RJ.C1 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RJ.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RS.C1 = CF(0,0.5,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		LS.C1 = CF(0,0.5,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RH.C1 = CF(0,1,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		LH.C1 = CF(0,1,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RH.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		LH.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RS.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		LS.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
	
		IT = Instance.new
		CF = CFrame.new
		VT = Vector3.new
		RAD = math.rad
		C3 = Color3.new
		UD2 = UDim2.new
		BRICKC = BrickColor.new
		ANGLES = CFrame.Angles
		EULER = CFrame.fromEulerAnglesXYZ
		COS = math.cos
		ACOS = math.acos
		SIN = math.sin
		ASIN = math.asin
		ABS = math.abs
		MRANDOM = math.random
		FLOOR = math.floor
	
		speed = 1
		sine = 1
		srv = game:GetService('RunService')
	
		function hatset(yes,part,c1,c0,nm)
			reanim[yes].Handle.AccessoryWeld.Part1=reanim[part]
			reanim[yes].Handle.AccessoryWeld.C1=c1 or CFrame.new()
			reanim[yes].Handle.AccessoryWeld.C0=c0 or CFrame.new()--3bbb322dad5929d0d4f25adcebf30aa5
			if nm==true then
				noplsmesh(yes)
			end
		end
	
		--put the hat script converted below
	
		reanim = game.Players.LocalPlayer.Character
		RJ = reanim.HumanoidRootPart.RootJoint
		RS = reanim.Torso['Right Shoulder']
		LS = reanim.Torso['Left Shoulder']
		RH = reanim.Torso['Right Hip']
		LH = reanim.Torso['Left Hip']
		Root = reanim.HumanoidRootPart
		NECK = reanim.Torso.Neck
		NECK.C0 = CF(0,1,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		NECK.C1 = CF(0,-0.5,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RJ.C1 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RJ.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RS.C1 = CF(-0.5,0.5,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		LS.C1 = CF(0.5,0.5,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RH.C1 = CF(0,1,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		LH.C1 = CF(0,1,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RH.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		LH.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		RS.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
		LS.C0 = CF(0,0,0)*ANGLES(RAD(0),RAD(0),RAD(0))
	
		Mode='1'
	
		mousechanger=game.Players.LocalPlayer:GetMouse().KeyDown:Connect(function(k)
			if k == 'urkeybind' then-- first mode
				Mode='1'
			elseif k == 'urkeybind' then-- second mode
				Mode='2'
			elseif k == 'urkeybind' then-- third mode
				Mode='3'
			end
		end)
	
		coroutine.wrap(function()
			while true do -- anim changer
				if HumanDied then mousechanger:Disconnect() break end
				sine = sine + speed
				local rlegray = Ray.new(reanim["Right Leg"].Position + Vector3.new(0, 0.5, 0), Vector3.new(0, -2, 0))
				local rlegpart, rlegendPoint = workspace:FindPartOnRay(rlegray, char)
				local llegray = Ray.new(reanim["Left Leg"].Position + Vector3.new(0, 0.5, 0), Vector3.new(0, -2, 0))
				local llegpart, llegendPoint = workspace:FindPartOnRay(llegray, char)
				local rightvector = (Root.Velocity * Root.CFrame.rightVector).X + (Root.Velocity * Root.CFrame.rightVector).Z
				local lookvector = (Root.Velocity * Root.CFrame.lookVector).X + (Root.Velocity * Root.CFrame.lookVector).Z
				if lookvector > reanim.Humanoid.WalkSpeed then
					lookvector = reanim.Humanoid.WalkSpeed
				end
				if lookvector < -reanim.Humanoid.WalkSpeed then
					lookvector = -reanim.Humanoid.WalkSpeed
				end
				if rightvector > reanim.Humanoid.WalkSpeed then
					rightvector = reanim.Humanoid.WalkSpeed
				end
				if rightvector < -reanim.Humanoid.WalkSpeed then
					rightvector = -reanim.Humanoid.WalkSpeed
				end
				local lookvel = lookvector / reanim.Humanoid.WalkSpeed
				local rightvel = rightvector / reanim.Humanoid.WalkSpeed
				if Mode == '1' then
					if Root.Velocity.y > 1 then -- jump
						--jump clerp here
					elseif Root.Velocity.y < -1 then -- fall
						--fall clerp here
					elseif Root.Velocity.Magnitude < 2 then -- idle
						--idle clerp here
					elseif Root.Velocity.Magnitude < 20 then -- walk
						NECK.C0 = NECK.C0:Lerp(CF(0+0*math.cos(sine/13),0+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
						RJ.C0 = RJ.C0:Lerp(CF(0+1*math.cos(sine/13),0+1*math.cos(sine/13),0+1*math.cos(sine/13))*ANGLES(RAD(1+0*math.cos(sine/13)),RAD(1+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
						RS.C0 = RS.C0:Lerp(CF(1+0*math.cos(sine/13),0+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(-2+27*math.cos(sine/13)),RAD(-2+7*math.cos(sine/13)),RAD(30+0*math.cos(sine/13))),.3)
						LS.C0 = LS.C0:Lerp(CF(-1+0*math.cos(sine/13),0+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+10*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(-24+5*math.cos(sine/13))),.3)
						RH.C0 = RH.C0:Lerp(CF(2+0*math.cos(sine/8),-1+0*math.cos(sine/8),0+0*math.cos(sine/8))*ANGLES(RAD(0+41*math.cos(sine/8)),RAD(0+32*math.cos(sine/8)),RAD(0+32*math.cos(sine/8))),.3)
						LH.C0 = LH.C0:Lerp(CF(-2+0*math.cos(sine/8),-1+0*math.cos(sine/8),0+0*math.cos(sine/8))*ANGLES(RAD(0+43*math.cos(sine/8)),RAD(0+36*math.cos(sine/8)),RAD(0+-11*math.cos(sine/8))),.3)
					elseif Root.Velocity.Magnitude > 20 then -- run
						--run clerp here
					end
				elseif Mode == '2' then
					if Root.Velocity.y > 1 then -- jump
						--jump clerp here
					elseif Root.Velocity.y < -1 then -- fall
						--fall clerp here
					elseif Root.Velocity.Magnitude < 2 then -- idle
						--idle clerp here
					elseif Root.Velocity.Magnitude < 20 then -- walk
						--walk clerp here
					elseif Root.Velocity.Magnitude > 20 then -- run
						--run clerp here
					end
				elseif Mode == '3' then
					if Root.Velocity.y > 1 then -- jump
						--jump clerp here
					elseif Root.Velocity.y < -1 then -- fall
						--fall clerp here
					elseif Root.Velocity.Magnitude < 2 then -- idle
						--idle clerp here
					elseif Root.Velocity.Magnitude < 20 then -- walk
						--walk clerp here
					elseif Root.Velocity.Magnitude > 20 then -- run
						--run clerp here
					end
				end
				srv.RenderStepped:Wait()
			end
		end)()
	
		local Sound = Instance.new("Sound")
		Sound.Parent = game.Players.LocalPlayer.Character.Humanoid
		Sound.SoundId = "rbxassetid://5117577638"
		Sound.Looped = true
		Sound:Play()
		end
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(VKLPRW_fake_script)()
local function YTSZ_fake_script() -- ImageButton_5.LocalScript 
	local script = Instance.new('LocalScript', ImageButton_5)

	function OnClicked() 
		local plr = game.Players.LocalPlayer
		local char = game.Players.LocalPlayer.Character
		local srv = game:GetService('RunService')
		local ct = {}
		local te = table.insert
		_G.Dead=false
	
		char.Archivable=true
		local reanim = char:Clone()
		fl=Instance.new('Folder',char) fl.Name='NexoR15'
	
		for i,v in next, char:GetDescendants() do 
			if v:IsA('MeshPart') then
				te(ct,srv.Heartbeat:Connect(function()
					v.Velocity = Vector3.new(0,-30,0)
					sethiddenproperty(game.Players.LocalPlayer,"MaximumSimulationRadius",10000)
					sethiddenproperty(game.Players.LocalPlayer,"SimulationRadius",10000)
				end))
			end
		end
	
		for i,v in next, char.Humanoid:GetPlayingAnimationTracks() do
			v:Stop()
		end
		char.Animate:Remove()
	
		for i,v in next, reanim:GetDescendants() do
			if v:IsA('MeshPart') or v:IsA('Decal') then
				v.Transparency=1
			end
		end
	
		hats=0
		function create(part, parent, p, r)
			hats=hats+1
			Instance.new("Attachment",part)
			Instance.new("AlignPosition",part)
			Instance.new("AlignOrientation",part)
			Instance.new("Attachment",parent)
			part.Attachment.Name = part.Name..hats
			parent.Attachment.Name = part.Name..hats
			part.AlignPosition.Attachment0 = part[part.Name..hats]
			part.AlignOrientation.Attachment0 = part[part.Name..hats]
			part.AlignPosition.Attachment1 = parent[part.Name..hats]
			part.AlignOrientation.Attachment1 = parent[part.Name..hats]
			parent[part.Name..hats].Position = p or Vector3.new()
			part[part.Name..hats].Orientation = r or Vector3.new()
			part.AlignPosition.MaxForce = 999999999
			part.AlignPosition.MaxVelocity = 99999999
			part.AlignPosition.ReactionForceEnabled = false
			part.AlignPosition.Responsiveness = 99999999
			part.AlignOrientation.Responsiveness = 99999999
			part.AlignPosition.RigidityEnabled = false
			part.AlignOrientation.MaxTorque = 999999
		end
	
		for i,v in next, char:GetDescendants() do
			if v:IsA('Motor6D') and v.Name ~= 'Neck' then
				v:Destroy()
			end
		end
	
		for i,v in next, char:GetChildren() do
			if v:IsA('MeshPart') and v.Name ~= 'Head' and v.Name ~= 'HumanoidRootPart' and v.Parent == char then
				create(v,reanim[v.Name])
			end
		end
	
		for i,v in next, char:GetDescendants() do
			if v:IsA('Accessory') then
				v.Handle:BreakJoints()
				create(v.Handle,reanim[v.Name].Handle)
			end
		end
	
		--char.HumanoidRootPart:Destroy()
	
		function noc()
			for i,v in next, reanim:GetDescendants() do
				if v:IsA('MeshPart') or v:IsA('BasePart') then
					table.insert(ct,srv.Stepped:Connect(function()
						v.CanCollide = false
					end))
				end
			end
			for i,v in next, char:GetDescendants() do
				if v:IsA('MeshPart') or v:IsA('BasePart') then
					table.insert(ct,srv.Stepped:Connect(function()
						v.CanCollide = false
					end))
				end
			end
			for i,v in next, reanim:GetDescendants() do
				if v:IsA('MeshPart') or v:IsA('BasePart') then
					table.insert(ct,srv.RenderStepped:Connect(function()
						v.CanCollide = false
					end))
				end
			end
			for i,v in next, char:GetDescendants() do
				if v:IsA('MeshPart') or v:IsA('BasePart') then
					table.insert(ct,srv.RenderStepped:Connect(function()
						v.CanCollide = false
					end))
				end
			end
		end
	
		noc()
	
		create(char.HumanoidRootPart,reanim.UpperTorso)
		char.Humanoid:ChangeState(16)
	
		reanim.Animate.Disabled=true
		reanim.Parent=fl
	
		plr.Character=reanim
		workspace.Camera.CameraSubject=reanim.Humanoid
	
		te(ct,reanim.Humanoid.Died:Connect(function()
			_G.Dead=true
			plr.Character=char
			char.Humanoid:Destroy()
			hc=Instance.new('Humanoid',char)
			game.Players:Chat('-gr')
			for i,v in next, ct do v:Disconnect() end
		end))
	
		reanim=game.Players.LocalPlayer.Character
	
		sine=1
		speed=1
	
		HRP=reanim.HumanoidRootPart
	
		IT = Instance.new
		CF = CFrame.new
		VT = Vector3.new
		RAD = math.rad
		C3 = Color3.new
		UD2 = UDim2.new
		BRICKC = BrickColor.new
		ANGLES = CFrame.Angles
		EULER = CFrame.fromEulerAnglesXYZ
		COS = math.cos
		ACOS = math.acos
		SIN = math.sin
		ASIN = math.asin
		ABS = math.abs
		MRANDOM = math.random
		FLOOR = math.floor
	
		Neck=reanim:FindFirstChild("Neck",true)
		Neck.C1=CFrame.new(0,-0.5,0)
		Waist=reanim:FindFirstChild("Waist",true)
		Waist.C1=CFrame.new(0,-0.7,0)
		Root=reanim:FindFirstChild("Root",true)
		Root.C1=CFrame.new(0,0,0)
		Luarm=reanim:FindFirstChild("LeftShoulder",true)
		Luarm.C1=CFrame.new(0.5,0.2,0)
		Llarm=reanim:FindFirstChild("LeftElbow",true)
		Llarm.C1=CFrame.new(0,0.2,0)
		Lhand=reanim:FindFirstChild("LeftWrist",true)
		Lhand.C1=CFrame.new(0,0.10,0)
		Ruarm=reanim:FindFirstChild("RightShoulder",true)
		Ruarm.C1=CFrame.new(-0.5,0.2,0)
		Rlarm=reanim:FindFirstChild("RightElbow",true)
		Rlarm.C1=CFrame.new(0,0.2,0)
		Rhand=reanim:FindFirstChild("RightWrist",true)
		Rhand.C1=CFrame.new(0,0.10,0)
		Luleg=reanim:FindFirstChild("LeftHip",true)
		Luleg.C1=CFrame.new(0,0.3,0)
		Llleg=reanim:FindFirstChild("LeftKnee",true)
		Llleg.C1=CFrame.new(0,0.3,0)
		Lhleg=reanim:FindFirstChild("LeftAnkle",true)
		Lhleg.C1=CFrame.new(0,0.10,0)
		Ruleg=reanim:FindFirstChild("RightHip",true)
		Ruleg.C1=CFrame.new(0,0.3,0)
		Rlleg=reanim:FindFirstChild("RightKnee",true)
		Rlleg.C1=CFrame.new(0,0.3,0)
		Rhleg=reanim:FindFirstChild("RightAnkle",true)
		Rhleg.C1=CFrame.new(0,0.10,0)
	
		coroutine.wrap(function()
			while true do -- anim changer
				if _G.Dead == true then break end
				sine = sine + speed
				local rightvector = (HRP.Velocity * HRP.CFrame.rightVector).X + (HRP.Velocity * HRP.CFrame.rightVector).Z
				local lookvector = (HRP.Velocity * HRP.CFrame.lookVector).X + (HRP.Velocity * HRP.CFrame.lookVector).Z
				if lookvector > reanim.Humanoid.WalkSpeed then
					lookvector = reanim.Humanoid.WalkSpeed
				end
				if lookvector < -reanim.Humanoid.WalkSpeed then
					lookvector = -reanim.Humanoid.WalkSpeed
				end
				if rightvector > reanim.Humanoid.WalkSpeed then
					rightvector = reanim.Humanoid.WalkSpeed
				end
				if rightvector < -reanim.Humanoid.WalkSpeed then
					rightvector = -reanim.Humanoid.WalkSpeed
				end
				local lookvel = lookvector / reanim.Humanoid.WalkSpeed
				local rightvel = rightvector / reanim.Humanoid.WalkSpeed
				if HRP.Velocity.y > 1 then -- jump
					--jump clerp here
					Neck.C0 = Neck.C0:Lerp(CF(0+0*math.cos(sine/13),0.8+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+99999999*math.cos(sine/13))),.3)
					Waist.C0 = Waist.C0:Lerp(CF(0+0*math.cos(sine/13),0.3+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Root.C0 = Root.C0:Lerp(CF(0+0*math.cos(sine/1),-0.8+0*math.cos(sine/1),0+0*math.cos(sine/1))*ANGLES(RAD(0+999999999999999*math.cos(sine/1)),RAD(0+9999999999999999999999999999*math.cos(sine/1)),RAD(0+99999999*math.cos(sine/1))),.3)
					Luarm.C0 = Luarm.C0:Lerp(CF(-1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999*math.cos(sine/13))),.3)
					Llarm.C0 = Llarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999*math.cos(sine/13)),RAD(0+9999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13))),.3)
					Lhand.C0 = Lhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13)),RAD(0+999999*math.cos(sine/13))),.3)
					Ruarm.C0 = Ruarm.C0:Lerp(CF(1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999*math.cos(sine/13))),.3)
					Rlarm.C0 = Rlarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999999999999999999999*math.cos(sine/13))),.3)
					Rhand.C0 = Rhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Luleg.C0 = Luleg.C0:Lerp(CF(-0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Llleg.C0 = Llleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Lhleg.C0 = Lhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Ruleg.C0 = Ruleg.C0:Lerp(CF(0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999*math.cos(sine/13)),RAD(0+999999999999*math.cos(sine/13)),RAD(0+99999999999*math.cos(sine/13))),.3)
					Rlleg.C0 = Rlleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+999999999999999999*math.cos(sine/13)),RAD(0+9999999999*math.cos(sine/13)),RAD(0+9999999999999*math.cos(sine/13))),.3)
					Rhleg.C0 = Rhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
				elseif HRP.Velocity.y < -1 then -- fall
					--fall clerp here
					Neck.C0 = Neck.C0:Lerp(CF(0+0*math.cos(sine/13),0.8+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+99999999*math.cos(sine/13))),.3)
					Waist.C0 = Waist.C0:Lerp(CF(0+0*math.cos(sine/13),0.3+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Root.C0 = Root.C0:Lerp(CF(0+0*math.cos(sine/1),-0.8+0*math.cos(sine/1),0+0*math.cos(sine/1))*ANGLES(RAD(0+999999999999999*math.cos(sine/1)),RAD(0+9999999999999999999999999999*math.cos(sine/1)),RAD(0+99999999*math.cos(sine/1))),.3)
					Luarm.C0 = Luarm.C0:Lerp(CF(-1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999*math.cos(sine/13))),.3)
					Llarm.C0 = Llarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999*math.cos(sine/13)),RAD(0+9999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13))),.3)
					Lhand.C0 = Lhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13)),RAD(0+999999*math.cos(sine/13))),.3)
					Ruarm.C0 = Ruarm.C0:Lerp(CF(1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999*math.cos(sine/13))),.3)
					Rlarm.C0 = Rlarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999999999999999999999*math.cos(sine/13))),.3)
					Rhand.C0 = Rhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Luleg.C0 = Luleg.C0:Lerp(CF(-0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Llleg.C0 = Llleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Lhleg.C0 = Lhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Ruleg.C0 = Ruleg.C0:Lerp(CF(0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999*math.cos(sine/13)),RAD(0+999999999999*math.cos(sine/13)),RAD(0+99999999999*math.cos(sine/13))),.3)
					Rlleg.C0 = Rlleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+999999999999999999*math.cos(sine/13)),RAD(0+9999999999*math.cos(sine/13)),RAD(0+9999999999999*math.cos(sine/13))),.3)
					Rhleg.C0 = Rhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
				elseif HRP.Velocity.Magnitude < 2 then -- idle
					--idle clerp here
					Neck.C0 = Neck.C0:Lerp(CF(0+0*math.cos(sine/13),0.8+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+99999999*math.cos(sine/13))),.3)
					Waist.C0 = Waist.C0:Lerp(CF(0+0*math.cos(sine/13),0.3+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Root.C0 = Root.C0:Lerp(CF(0+0*math.cos(sine/1),-0.8+0*math.cos(sine/1),0+0*math.cos(sine/1))*ANGLES(RAD(0+999999999999999*math.cos(sine/1)),RAD(0+9999999999999999999999999999*math.cos(sine/1)),RAD(0+99999999*math.cos(sine/1))),.3)
					Luarm.C0 = Luarm.C0:Lerp(CF(-1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999*math.cos(sine/13))),.3)
					Llarm.C0 = Llarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999*math.cos(sine/13)),RAD(0+9999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13))),.3)
					Lhand.C0 = Lhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13)),RAD(0+999999*math.cos(sine/13))),.3)
					Ruarm.C0 = Ruarm.C0:Lerp(CF(1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999*math.cos(sine/13))),.3)
					Rlarm.C0 = Rlarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999999999999999999999*math.cos(sine/13))),.3)
					Rhand.C0 = Rhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Luleg.C0 = Luleg.C0:Lerp(CF(-0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Llleg.C0 = Llleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Lhleg.C0 = Lhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Ruleg.C0 = Ruleg.C0:Lerp(CF(0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999*math.cos(sine/13)),RAD(0+999999999999*math.cos(sine/13)),RAD(0+99999999999*math.cos(sine/13))),.3)
					Rlleg.C0 = Rlleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+999999999999999999*math.cos(sine/13)),RAD(0+9999999999*math.cos(sine/13)),RAD(0+9999999999999*math.cos(sine/13))),.3)
					Rhleg.C0 = Rhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
				elseif HRP.Velocity.Magnitude < 20 then -- walk
					--walk clerp here
					Neck.C0 = Neck.C0:Lerp(CF(0+0*math.cos(sine/13),0.8+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+99999999*math.cos(sine/13))),.3)
					Waist.C0 = Waist.C0:Lerp(CF(0+0*math.cos(sine/13),0.3+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Root.C0 = Root.C0:Lerp(CF(0+0*math.cos(sine/1),-0.8+0*math.cos(sine/1),0+0*math.cos(sine/1))*ANGLES(RAD(0+999999999999999*math.cos(sine/1)),RAD(0+9999999999999999999999999999*math.cos(sine/1)),RAD(0+99999999*math.cos(sine/1))),.3)
					Luarm.C0 = Luarm.C0:Lerp(CF(-1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999*math.cos(sine/13))),.3)
					Llarm.C0 = Llarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999*math.cos(sine/13)),RAD(0+9999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13))),.3)
					Lhand.C0 = Lhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13)),RAD(0+999999*math.cos(sine/13))),.3)
					Ruarm.C0 = Ruarm.C0:Lerp(CF(1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999*math.cos(sine/13))),.3)
					Rlarm.C0 = Rlarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999999999999999999999*math.cos(sine/13))),.3)
					Rhand.C0 = Rhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Luleg.C0 = Luleg.C0:Lerp(CF(-0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Llleg.C0 = Llleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Lhleg.C0 = Lhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Ruleg.C0 = Ruleg.C0:Lerp(CF(0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999*math.cos(sine/13)),RAD(0+999999999999*math.cos(sine/13)),RAD(0+99999999999*math.cos(sine/13))),.3)
					Rlleg.C0 = Rlleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+999999999999999999*math.cos(sine/13)),RAD(0+9999999999*math.cos(sine/13)),RAD(0+9999999999999*math.cos(sine/13))),.3)
					Rhleg.C0 = Rhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
				elseif HRP.Velocity.Magnitude > 20 then -- run
					--run clerp here
					Neck.C0 = Neck.C0:Lerp(CF(0+0*math.cos(sine/13),0.8+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+99999999*math.cos(sine/13))),.3)
					Waist.C0 = Waist.C0:Lerp(CF(0+0*math.cos(sine/13),0.3+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Root.C0 = Root.C0:Lerp(CF(0+0*math.cos(sine/1),-0.8+0*math.cos(sine/1),0+0*math.cos(sine/1))*ANGLES(RAD(0+999999999999999*math.cos(sine/1)),RAD(0+9999999999999999999999999999*math.cos(sine/1)),RAD(0+99999999*math.cos(sine/1))),.3)
					Luarm.C0 = Luarm.C0:Lerp(CF(-1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999*math.cos(sine/13)),RAD(0+99999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999*math.cos(sine/13))),.3)
					Llarm.C0 = Llarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999*math.cos(sine/13)),RAD(0+9999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13))),.3)
					Lhand.C0 = Lhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999*math.cos(sine/13)),RAD(0+999999999*math.cos(sine/13)),RAD(0+999999*math.cos(sine/13))),.3)
					Ruarm.C0 = Ruarm.C0:Lerp(CF(1+0*math.cos(sine/13),0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+9999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999*math.cos(sine/13))),.3)
					Rlarm.C0 = Rlarm.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+999999999999999999999999999999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999999999999999999999*math.cos(sine/13))),.3)
					Rhand.C0 = Rhand.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999999*math.cos(sine/13)),RAD(0+9999999999999999999999999*math.cos(sine/13))),.3)
					Luleg.C0 = Luleg.C0:Lerp(CF(-0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Llleg.C0 = Llleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Lhleg.C0 = Lhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
					Ruleg.C0 = Ruleg.C0:Lerp(CF(0.5+0*math.cos(sine/13),-0.42+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+99999999999999999999*math.cos(sine/13)),RAD(0+999999999999*math.cos(sine/13)),RAD(0+99999999999*math.cos(sine/13))),.3)
					Rlleg.C0 = Rlleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.4+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+999999999999999999*math.cos(sine/13)),RAD(0+9999999999*math.cos(sine/13)),RAD(0+9999999999999*math.cos(sine/13))),.3)
					Rhleg.C0 = Rhleg.C0:Lerp(CF(0+0*math.cos(sine/13),-0.52+0*math.cos(sine/13),0+0*math.cos(sine/13))*ANGLES(RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13)),RAD(0+0*math.cos(sine/13))),.3)
				end
				game:GetService('RunService').RenderStepped:Wait()
			end
		end)()
	end
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(YTSZ_fake_script)()
local function QRSZA_fake_script() -- ImageButton_6.LocalScript 
	local script = Instance.new('LocalScript', ImageButton_6)

	function OnClicked() 
		local LocalPlayer = game:GetService("Players").LocalPlayer
		local Character = LocalPlayer.Character
		local Humanoid = Character:FindFirstChildOfClass("Humanoid")
	
		local function rm()
			for i,v in pairs(Character:GetDescendants()) do
				if v:IsA("BasePart") then
					if v.Name ~= "Head" then
						for i,cav in pairs(v:GetDescendants()) do
							if cav:IsA("Attachment") then
								if cav:FindFirstChild("OriginalPosition") then
									cav.OriginalPosition:Destroy()
								end
							end
						end
						v:FindFirstChild("OriginalSize"):Destroy()
						if v:FindFirstChild("AvatarPartScaleType") then
							v:FindFirstChild("AvatarPartScaleType"):Destroy()
						end
					end
				end
			end
		end
	
		rm()
		wait(0.5)
		Humanoid:FindFirstChild("BodyTypeScale"):Destroy()
		wait(0.2)
	
		rm()
		wait(0.5)
		Humanoid:FindFirstChild("BodyWidthScale"):Destroy()
		wait(0.2)
	
		rm()
		wait(0.5)
		Humanoid:FindFirstChild("BodyDepthScale"):Destroy()
		wait(0.2)
	
		rm()
		wait(0.5)
		Humanoid:FindFirstChild("HeadScale"):Destroy()
		wait(0.2)
		end
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(QRSZA_fake_script)()
local function IZJF_fake_script() -- scriptlist.LocalScript 
	local script = Instance.new('LocalScript', scriptlist)

	local searchBar = script.Parent.SearchBar
	local items = script.Parent.Items
	
	function UpdateResults()
		local search = string.lower(searchBar.Text)
		for i, v in	 pairs(items:GetChildren()) do
			if v:IsA("GuiButton") then
				if search ~= "" then
					local item = string.lower(v.Text)
					if string.find(item, search) then
						v.Visible = true
					else
						v.Visible = false
					end
				else
					v.Visible = true
				end
			end
		end
	end
	
	searchBar.Changed:Connect(UpdateResults)
end
coroutine.wrap(IZJF_fake_script)()
local function ZTCSEJR_fake_script() -- Settings_button.LocalScript 
	local script = Instance.new('LocalScript', Settings_button)

	--//frames//--
	local home = script.Parent.Parent.Parent.Parent.MainFrame.Home
	local scriptlist = script.Parent.Parent.Parent.Parent.MainFrame.scriptlist
	local settin = script.Parent.Parent.Parent.Parent.MainFrame.Settings
	local miscell = script.Parent.Parent.Parent.Parent.MainFrame.miscellaneous
	--//buttons//--
	local homebutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Home_button
	local scriptlistbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Script_Button
	local settingsbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Settings_button
	local miscbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.misc_button
	
	function OnClicked() 
		home.Visible = false
		homebutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
		scriptlist.Visible = false
		scriptlistbutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
		settin.Visible = true
		settingsbutton.BackgroundColor3 = Color3.new(0.529412, 0, 0)
		miscell.Visible = false
		miscbutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
	end 
	
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(ZTCSEJR_fake_script)()
local function NZNDV_fake_script() -- Script_Button.LocalScript 
	local script = Instance.new('LocalScript', Script_Button)

	--//frames//--
	local home = script.Parent.Parent.Parent.Parent.MainFrame.Home
	local scriptlist = script.Parent.Parent.Parent.Parent.MainFrame.scriptlist
	local settin = script.Parent.Parent.Parent.Parent.MainFrame.Settings
	local miscell = script.Parent.Parent.Parent.Parent.MainFrame.miscellaneous
	--//buttons//--
	local homebutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Home_button
	local scriptlistbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Script_Button
	local settingsbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Settings_button
	local miscbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.misc_button
	
	function OnClicked() 
		home.Visible = false
		homebutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
		scriptlist.Visible = true
		scriptlistbutton.BackgroundColor3 = Color3.new(0.529412, 0, 0)
		settin.Visible = false
		settingsbutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
		miscell.Visible = false
		miscbutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
	end 
	
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(NZNDV_fake_script)()
local function RUMP_fake_script() -- Home_button.LocalScript 
	local script = Instance.new('LocalScript', Home_button)

	--//frames//--
	local home = script.Parent.Parent.Parent.Parent.MainFrame.Home
	local scriptlist = script.Parent.Parent.Parent.Parent.MainFrame.scriptlist
	local settin = script.Parent.Parent.Parent.Parent.MainFrame.Settings
	local miscell = script.Parent.Parent.Parent.Parent.MainFrame.miscellaneous
	--//buttons//--
	local homebutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Home_button
	local scriptlistbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Script_Button
	local settingsbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Settings_button
	local miscbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.misc_button
	
	function OnClicked() 
		home.Visible = true
		homebutton.BackgroundColor3 = Color3.new(0.529412, 0, 0)
		scriptlist.Visible = false
		scriptlistbutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
		settin.Visible = false
		settingsbutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
		miscell.Visible = false
		miscbutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
	end 
	
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(RUMP_fake_script)()
local function IBOJKK_fake_script() -- misc_button.LocalScript 
	local script = Instance.new('LocalScript', misc_button)

	--//frames//--
	local home = script.Parent.Parent.Parent.Parent.MainFrame.Home
	local scriptlist = script.Parent.Parent.Parent.Parent.MainFrame.scriptlist
	local settin = script.Parent.Parent.Parent.Parent.MainFrame.Settings
	local miscell = script.Parent.Parent.Parent.Parent.MainFrame.miscellaneous
	--//buttons//--
	local homebutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Home_button
	local scriptlistbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Script_Button
	local settingsbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.Settings_button
	local miscbutton = script.Parent.Parent.Parent.Parent.MainFrame.list.misc_button
	
	function OnClicked() 
		home.Visible = false
		homebutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
		scriptlist.Visible = false
		scriptlistbutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
		settin.Visible = false
		settingsbutton.BackgroundColor3 = Color3.new(0.133333, 0.133333, 0.133333)
		miscell.Visible = true
		miscbutton.BackgroundColor3 = Color3.new(0.529412, 0, 0)
	end 
	
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(IBOJKK_fake_script)()
local function TAHMNHE_fake_script() -- TextButton_2.LocalScript 
	local script = Instance.new('LocalScript', TextButton_2)

	local player = game.Players.LocalPlayer
	local db = true
	local mainframe = script.Parent.Parent.Parent.Parent.MainFrame
	local open = script.Parent.Parent.Parent.Parent.Open
	
	
	script.Parent.MouseButton1Click:Connect(function()
		if db == true then
			db = false
			mainframe.Visible = false
			open.Visible = true
		else
			mainframe.Visible = true
			open.Visible = false
		end
	end)
end
coroutine.wrap(TAHMNHE_fake_script)()
local function SBAEF_fake_script() -- ImageLabel_9.LocalScript 
	local script = Instance.new('LocalScript', ImageLabel_9)

	local sine = 0
	local change = 3
	
	while true do
	wait()
	sine = sine + change
	script.Parent.Rotation = 0 - 6 * math.cos(sine / 40)
	end
end
coroutine.wrap(SBAEF_fake_script)()
local function LMCGOXX_fake_script() -- welcome.LocalScript 
	local script = Instance.new('LocalScript', welcome)

	script.Parent.Text = "Welcome to Injectioner, "..game.Players.LocalPlayer.Name.."!"
end
coroutine.wrap(LMCGOXX_fake_script)()
local function KEWULB_fake_script() -- ImageButton_7.LocalScript 
	local script = Instance.new('LocalScript', ImageButton_7)

	function OnClicked() 
	loadstring(game:HttpGet('https://raw.githubusercontent.com/BlackMafiaHat/testitems/main/test'))()
	end
	
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(KEWULB_fake_script)()
local function ISUTQX_fake_script() -- ImageButton_8.LocalScript 
	local script = Instance.new('LocalScript', ImageButton_8)

	function OnClicked() 
		game:GetService("StarterGui"):SetCore("ChatMakeSystemMessage",{ --Getting "StarterGui" and calling the function
			Text = "[Injectioner]: Netless Activated!";
			Color = Color3.new(0.352941, 1, 0.00784314);
			FontSize = Enum.FontSize.Size24;
		})
		for i,v in next, game:GetService("Players").LocalPlayer.Character:GetDescendants() do
		if v:IsA("BasePart") and v.Name ~="HumanoidRootPart" then 
			game:GetService("RunService").Heartbeat:connect(function()
				v.Velocity = Vector3.new(45,0,0)
			end)
		end
	   end
	end
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(ISUTQX_fake_script)()
local function UYBWRC_fake_script() -- MainFrame.LocalScript 
	local script = Instance.new('LocalScript', MainFrame)

	local UserInputService = game:GetService("UserInputService")
	local runService = (game:GetService("RunService"));
	
	local gui = script.Parent
	
	local dragging
	local dragInput
	local dragStart
	local startPos
	
	function Lerp(a, b, m)
		return a + (b - a) * m
	end;
	
	local lastMousePos
	local lastGoalPos
	local DRAG_SPEED = (50); 
	function Update(dt)
		if not (startPos) then return end;
		if not (dragging) and (lastGoalPos) then
			gui.Position = UDim2.new(startPos.X.Scale, Lerp(gui.Position.X.Offset, lastGoalPos.X.Offset, dt * DRAG_SPEED), startPos.Y.Scale, Lerp(gui.Position.Y.Offset, lastGoalPos.Y.Offset, dt * DRAG_SPEED))
			return 
		end;
	
		local delta = (lastMousePos - UserInputService:GetMouseLocation())
		local xGoal = (startPos.X.Offset - delta.X);
		local yGoal = (startPos.Y.Offset - delta.Y);
		lastGoalPos = UDim2.new(startPos.X.Scale, xGoal, startPos.Y.Scale, yGoal)
		gui.Position = UDim2.new(startPos.X.Scale, Lerp(gui.Position.X.Offset, xGoal, dt * DRAG_SPEED), startPos.Y.Scale, Lerp(gui.Position.Y.Offset, yGoal, dt * DRAG_SPEED))
	end;
	
	gui.InputBegan:Connect(function(input)
		if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
			dragging = true
			dragStart = input.Position
			startPos = gui.Position
			lastMousePos = UserInputService:GetMouseLocation()
	
			input.Changed:Connect(function()
				if input.UserInputState == Enum.UserInputState.End then
					dragging = false
				end
			end)
		end
	end)
	
	gui.InputChanged:Connect(function(input)
		if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then
			dragInput = input
		end
	end)
	
	runService.Heartbeat:Connect(Update)
end
coroutine.wrap(UYBWRC_fake_script)()
local function HPNNVK_fake_script() -- ImageButton_9.LocalScript 
	local script = Instance.new('LocalScript', ImageButton_9)

	function OnClicked() 
	loadstring(game:HttpGet('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'))()
	end 
	
	script.Parent.MouseButton1Down:connect(OnClicked)
end
coroutine.wrap(HPNNVK_fake_script)()
local function FKTPKH_fake_script() -- miscellaneous.LocalScript 
	local script = Instance.new('LocalScript', miscellaneous)

	local searchBar = script.Parent.SearchBar
	local items = script.Parent.Items
	
	function UpdateResults()
		local search = string.lower(searchBar.Text)
		for i, v in	 pairs(items:GetChildren()) do
			if v:IsA("GuiButton") then
				if search ~= "" then
					local item = string.lower(v.Text)
					if string.find(item, search) then
						v.Visible = true
					else
						v.Visible = false
					end
				else
					v.Visible = true
				end
			end
		end
	end
	
	searchBar.Changed:Connect(UpdateResults)
end
coroutine.wrap(FKTPKH_fake_script)()
