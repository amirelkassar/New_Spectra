using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spectra.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class PermissoinBaseAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisplayName",
                table: "RolePermissions");

            migrationBuilder.CreateTable(
                name: "PermissionGroups",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    EnName = table.Column<string>(type: "text", nullable: false),
                    ArName = table.Column<string>(type: "text", nullable: false),
                    LogicalName = table.Column<string>(type: "text", nullable: false),
                    Notes = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PermissionGroups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PermissoinCategories",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    EnName = table.Column<string>(type: "text", nullable: false),
                    ArName = table.Column<string>(type: "text", nullable: false),
                    LogicalName = table.Column<string>(type: "text", nullable: false),
                    PermissionGroupId = table.Column<string>(type: "text", nullable: false),
                    Notes = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PermissoinCategories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PermissoinCategories_PermissionGroups_PermissionGroupId",
                        column: x => x.PermissionGroupId,
                        principalTable: "PermissionGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Permissions",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    EnName = table.Column<string>(type: "text", nullable: false),
                    ArName = table.Column<string>(type: "text", nullable: false),
                    LogicalName = table.Column<string>(type: "text", nullable: false),
                    PermissoinCategoryId = table.Column<string>(type: "text", nullable: false),
                    Notes = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Permissions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Permissions_PermissoinCategories_PermissoinCategoryId",
                        column: x => x.PermissoinCategoryId,
                        principalTable: "PermissoinCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Permissions_PermissoinCategoryId",
                table: "Permissions",
                column: "PermissoinCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_PermissoinCategories_PermissionGroupId",
                table: "PermissoinCategories",
                column: "PermissionGroupId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Permissions");

            migrationBuilder.DropTable(
                name: "PermissoinCategories");

            migrationBuilder.DropTable(
                name: "PermissionGroups");

            migrationBuilder.AddColumn<string>(
                name: "DisplayName",
                table: "RolePermissions",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
